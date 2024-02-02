const fs = require("fs");

function writeToFile(filePath, content) {
    // Implementation
    fs.writeFile(filePath, content, "utf8", (err) => {
        if (err) {
            console.log("Error: ", err);
        } else {
            console.log(`Data written to ${filePath}`);
        }
    })
}

writeToFile('test-files/output1.txt', 'Sample content.');
// Expected Output: Data written to output1.txt

writeToFile('test-files/nonexistent-folder/output.txt', 'Content in a non-existent folder.');
// Expected Output: Error writing to file: ENOENT: no such file or directory...