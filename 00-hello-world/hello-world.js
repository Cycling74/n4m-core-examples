// Include the Max API library so that Node can communicate with Max.
let maxApi = require("max-api");

// Post to the Max Console
maxApi.post("Hello, World (in the Max console)");

// Send a message to the leftmost outlet of node.script
maxApi.outlet("Hello, World");
