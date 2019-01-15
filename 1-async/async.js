const maxApi = require("max-api");

// 0. Callback functions, the oldest way
// After sending the message "hello-callback", will post to the Max console
// after three seconds
maxApi.addHandler("hello-callback", () => {
  setTimeout(() => {
      maxApi.post("Hello from a callback!");
  }, 3000);
});

// 1. Promises, the newer way
// So, right now, this looks longer and more complicated, but you can
maxApi.addHandler("hello-promise", () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello from a promise!"), 3000);
  });
  promise.then((response) => {
    maxApi.post(response);
  });
});

// 2. Promises with async/await
// This still looks complicated, but just keep trusting...
// The reason this is still long is because setTimeout hasn't been "promisified"
maxApi.addHandler("hello-async", async () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello from await promise!"), 3000);
  });

  // let result = await promise;
  maxApi.post(await promise);
});

// 3. async/await with a promisified function
// https is a core library of Node.js—you don't need to run npm install https
// uses the Datamuse API
const https = require('https');

maxApi.addHandler("node-synonym", async () => {
  let result = await https.get('https://api.datamuse.com/words?ml=node');
  maxApi.post(result[0].word);
});
