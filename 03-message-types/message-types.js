// Include the Max API library
let maxApi = require("max-api");

// Convenience access to MESSAGE_TYPES
const MESSAGE_TYPES = maxApi.MESSAGE_TYPES;

// MESSAGE_TYPES supports 4 built-in types:
// ALL		for handling all messages to node.script
// BANG		for handling all bang messages to node.script
// NUMBER	for handling number input
// LIST		for handling list input
// DICT		for handling dict input

maxApi.addHandler(MESSAGE_TYPES.BANG, async () => {
	await maxApi.outlet("handler", "received: bang");
});

maxApi.addHandler(MESSAGE_TYPES.NUMBER, async (num) => {
	await maxApi.outlet("handler", `received number: ${num}`);
});

maxApi.addHandler(MESSAGE_TYPES.LIST, async (...args) => {
	await maxApi.outlet("handler", `received list: ${args.join(", ")}`);
});

maxApi.addHandler(MESSAGE_TYPES.DICT, async (dict) => {
	await maxApi.outlet("handler", `received dict: ${JSON.stringify(dict)}`);
});

// We are using the ALL type to implement a logger that catches all input
// the first argument indicates whether the message has been processed by any handler before
// the second argument indicates the type or selector of the message
maxApi.addHandler(MESSAGE_TYPES.ALL, async (handled, selector, ...msg) => {
	await maxApi.outlet("log", ...msg);
});
