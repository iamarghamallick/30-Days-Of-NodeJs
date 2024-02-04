const path = require("path");

function resolvePath(relativePath) {
    // Implementation
    const currDir = process.cwd();
    const resolvedPath = path.resolve(currDir, relativePath);

    console.log("Resolved Path: ", resolvedPath);
}

// Expected Output:
// Resolved Path: /Users/username / project / folder / file.txt Test Cases:

resolvePath('./file.txt');
// Expected Output: Resolved Path: /Users/username/project/folder/file.txt

resolvePath('nonexistent-folder/file.txt');
// Expected Output: Resolved Path: /Users/username/nonexistent-folder/file.txt