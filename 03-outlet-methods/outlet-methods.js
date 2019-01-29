// Include the Max API library
let maxApi = require("max-api");

maxApi.addHandler("example1", () => {
	// When sending a result back from a handler, using maxApi.outlet, it's
	// common to include a selector as the first argument. This makes it
	// easier to route the message in Max.
	maxApi.outlet("example1", "result", 42);
});

maxApi.addHandler("example2", () => {
	// maxApi.outlet can take any number of arguments. Each will be added
	// to a Max list and then sent out from node.script. If you want to
	// send an array back to Max, use the spread operator to "unpack"
	// the array across the arguments to maxApi.outlet.
	const returnArray = [4, 5, 6, "seven"];
	maxApi.outlet("example2", ...returnArray);
});

maxApi.addHandler("example3", () => {
	// If one of the arguments to maxApi.outlet is a JavaScript object, it
	// will be converted automatically into a Max dictionary. Note that this
	// will change the length of the list in Max, since a single dictionary
	// is represented by two symbols in a Max list: the symbol "dictionary",
	// followed by the unique name of the dictionary.
	maxApi.outlet("example3", {
		red: "red",
		green: "green",
		blue: 42
	});
});
