import fs from "fs";

function readFileContent(filePath) {
    // Implementation
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("File Content:\n");
            console.log(data, "\n");
        }
    });
}

readFileContent('test-files/file1.txt');
// Expected Output: Content of file1.txt

readFileContent('test-files/empty-file.txt');
// Expected Output: (empty string)

readFileContent('test-files/nonexistent-file.txt');
// Expected Output: Error reading file: ENOENT: no such file or directory...