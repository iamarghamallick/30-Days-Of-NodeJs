const express = require("express");
const mongoose = require("mongoose");

let isDBConnected = false;
const connectDB = async () => {
    if (isDBConnected) {
        return;
    }
    await mongoose.connect("mongodb://localhost/myDB", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    isDBConnected = true;
};
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
});

const ProductModel = mongoose.model("products", ProductSchema);

const app = express();

async function createProduct(productData) {
    await connectDB();
    const product = ProductModel(productData); await product.save();
}

app.get("/products/new", async (req, res) => {
    try {
        const name = req.query.name;
        const price = req.query.price;
        const quantity = req.query.quantity; await createProduct({
            name: name,
            price: price,
            quantity: quantity,
        });
        res.send("Product created");
    } catch (err) {
        console.error("Operation failed", err); res.status(500).send("Operation failed");
    }
});
async function getAllProducts() {
    await connectDB();
    return await ProductModel.find();
}

app.get("/products", async (_, res) => {
    try {
        const products = await getAllProducts(); res.json(products);
    } catch (err) {
        console.error("Fetch failed", err); res.status(500).send("Fetch failed");
    }
});

async function updateProduct(productId, updatedProduct) {
    await connectDB();
    await ProductModel.findOneAndUpdate(
        {
            _id: productId,
        },
        updatedProduct
    );
}
app.get("/products/update", async (req, res) => {
    try {
        const id = req.query.id;
        const name = req.query.name;
        const price = req.query.price;
        const quantity = req.query.quantity; await updateProduct(id, {
        });
        name, price, quantity,
            res.send("Product updated");
    } catch (err) {
        console.error("Update failed", err); res.status(500).send("Update failed");
    }
});

async function deleteProduct(productId) {
    await connectDB();
    await ProductModel.deleteOne({
        _id: productId,
    });
}
app.get("/products/delete", async (req, res) => {
    try {
        const id = req.query.id;
        await deleteProduct(id);
        res.send("Product deleted");
    } catch (err) {
        console.error("Delete failed", err); res.status(500).send("Delete failed");
    }
});

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}/`);
});