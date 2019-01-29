// Include the Max API library
let maxApi = require("max-api");

// addHandler takes two arguments. The first is a selector. The node.script
// object will call this function whenever it gets a message whose first
// element is the symbol "double". The second argument to addHandler is a
// function that will receive the rest of the message sent to node.script.
// Here, the function is declared using "big arrow" syntax for declaring
// an anonymous function. See:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
maxApi.addHandler("double", (x) => {
	maxApi.outlet(2 * x);
});

// In order to accept a variable number of arguments, you can use the spread
// operator. This handler will accept messages like [sum 41], [sum 1 2 3] or
// even [sum 4 5 6 7 8 9 2 4 3 36]. It will return the sum of the remaining
// elements of the Max list.
maxApi.addHandler("sum", (...elements) => {
	// elements will be an array of the remaining elements of the list.
	let total = 0;
	for (let i = 0; i < elements.length; i++) {
		total = total + elements[i];
	}
	maxApi.outlet(total);
});
