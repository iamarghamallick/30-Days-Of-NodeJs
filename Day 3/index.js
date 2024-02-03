import cp from "child_process";

function executeCommand(command) {
    // Implementation
    try {
        let res = cp.execSync(command);
        console.log("Command Output:\n", res.toString());
    } catch (err) {
        console.log(err);
    }
}

executeCommand('dir');
// Expected Output: (output of dir)

executeCommand('echo "Hello, Node.js!"');
// Expected Output: Hello, Node.js!