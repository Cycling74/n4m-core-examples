// Include the Max API library so that Node can communicate with Max.
let maxApi = require("max-api");

// (2) Post to the Max Console
maxApi.post("Hello World, in the Max console");

// (2) Post to the JavaScript console, which can be seen in the [node.debug] object
console.log("Hello World, in the JavaScript console");

// Handle input from Max, which can have many different formats

// (3) Handle a bang input
maxApi.addHandler("bang", () => {
	maxApi.post("Received 'bang' from Max in Node");
});

// (4) Handle a one word message input
maxApi.addHandler("meow", () => {
	maxApi.post("Received 'meow' from Max");
});

// (5) Handle data
maxApi.addHandler("feed", (name) => {
	maxApi.post(`Received 'feed' message with name ${name}`);
});

// (6) Handle a list of unknown length
maxApi.addHandler("greet", (...names) => {
	names.forEach((name) => {
		maxApi.post(`Hello ${name}!`);
	});
});

// (7) Handle dictionary input
maxApi.addHandler("inspectDictionary", (dict) => {
	// dictionary is automatically converted to a JavaScript Object
	maxApi.post(dict);
});

// (8) Output String to Max, which is converted to a Symbol
maxApi.outlet("Hi from Node!");

// (9) Use route in Max to select a message from the [node.script] outlet
let count = 0;
maxApi.addHandler("increment", () => {
	count += 1;
	// Passing multiple arguments to outlet converts them to a list in Max
	maxApi.outlet("count", count);
});


// Output an array to Max
maxApi.addHandler("outputArray", () => {
	let myArray = [1, 2, 3];
	// If you just output the Array, it is converted to a list
	maxApi.outlet(myArray);
});

// Output an array, but use first output argument to route in Max
maxApi.addHandler("outputArray", () => {
	let myArray = [1, 2, 3];
	// If you want to output the array with other stuff, you need to use the
	// spread operator to convert it to a list, otherwise it will be output
	// as a dictionary
	maxApi.outlet("handleArray", ...myArray);
});

// Objects in JavaScript are converted to a dict in Max
maxApi.addHandler("outletDictionary", () => {
	maxApi.outlet("handleDict", {a: "b", c: "d"});
});
