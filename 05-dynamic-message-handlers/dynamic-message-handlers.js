const maxApi = require("max-api");

// A simple logger function to show us when an input message was received
// We will also indicate whether a message has been handled or not.
const logMessage = async (handled, selector, ...msg) => {
	await maxApi.outlet("log", `received ${handled ? "handled" : "unhandled" } message: ${msg && msg.length ? msg : selector}`);
};

// Simple number duplicator
const doubleNumber = async (num) => {
	await maxApi.outlet("double", num * 2);
};

const tripleNumber = async (num) => {
	await maxApi.outlet("triple", num * 3);
};

// Instead of calling addHandler we can also leverage addHandlers and register
// a whole set of message handlers with a single statement.
maxApi.addHandlers({


	// You can use a computed property key to access f.e. a MESSAGE_TYPE
	// Learn more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names
	[maxApi.MESSAGE_TYPES.ALL]: logMessage,

	// Dynamically attach a second handler for number input

	"enable_double": () => {
		maxApi.addHandler(maxApi.MESSAGE_TYPES.NUMBER, doubleNumber);
	},

	"disable_double": () => {
		maxApi.removeHandler(maxApi.MESSAGE_TYPES.NUMBER, doubleNumber);
	},

	"enable_triple": () => {
		maxApi.addHandler(maxApi.MESSAGE_TYPES.NUMBER, tripleNumber);
	},

	// Dynamically detach the second number input handler
	"disable_triple": () => {
		maxApi.removeHandler(maxApi.MESSAGE_TYPES.NUMBER, tripleNumber);
	},

	// Use removeHandlers to remove...
	// all handlers for a specific message type or all registered handlers...
	"remove_number_handlers": (msg) => {
		maxApi.removeHandlers(maxApi.MESSAGE_TYPES.NUMBER);
	},

	// ...or all registered handlers alltogether
	"remove_all_handlers": () => {
		maxApi.removeHandlers();
	}
});
