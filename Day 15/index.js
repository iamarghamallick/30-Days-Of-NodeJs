const express = require("express");
const bodyParser = require("body-parser");
const loggingMiddleware = require("./loggingMiddleware");
const homeRoutes = require("./routes/home");
const apiRoutes = require("./routes/apiRoutes");

const app = express();

app.use(bodyParser.json());
app.use(loggingMiddleware);

app.use("/", homeRoutes);
app.use("/api", apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});