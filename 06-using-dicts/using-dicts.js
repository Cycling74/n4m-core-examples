const maxApi = require("max-api");

const DICT_ID = "n4m.dict";

// Used for storing the initial value
let initialDict = {};

// Getting and setting dicts is an asynchronous process and the API function
// calls all return a Promise. We use the async/await syntax here in order
// to handle the async behaviour gracefully.
//
// Want to learn more about Promised and async/await:
//		* Web Fundamentals intro to Promises: https://developers.google.com/web/fundamentals/primers/promises
//		* Promises Deep Dive on MDN: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises
//		* Web Fundamentals on using async/await and their benefits: https://developers.google.com/web/fundamentals/primers/async-functions
//		* Async Functions on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

maxApi.addHandlers({
	set: async (path, value) => {
		const dict = await maxApi.updateDict(DICT_ID, path, value);
		await maxApi.outlet(dict);
	},
	reset: async () => {
		const dict = await maxApi.setDict(DICT_ID, initialDict);
		await maxApi.outlet(dict);
	},
	show: async () => {
		const dict = await maxApi.getDict(DICT_ID);
		await maxApi.outlet(dict);
	}
});

// We use this to store the initial value of the dict on process start
// so that the call to "reset" and reset it accordingly
const main = async () => { initialDict = await maxApi.getDict(DICT_ID); };
main();


