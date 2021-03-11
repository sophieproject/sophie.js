# sophie.js
Sophie.js is the API wrapper for Sophie's built-in Rasa API. This API grants you access to Sophie's AI, and you can use it in Node.js projects (such as chat servers) or in PHP code for webapps, Javascript for client-side message checking, and more! We will be providing several layers of documentation on how to use Sophie's API shortly, as it is mostly just a fetch function, followed by some JSON parsing and simplifying.

Sophie.js is the **node.js** version of the API wrapper, and has very simple calling and properties. It is Asynchronous, and the response time depends on our API's status.

Currently, this API Wrapper isn't active as we do not have an API server yet. Once we do, we will make a public announcement (and update the repo! Watch to be notified!) and this wrapper will be as easy to use as possible.

## How to use
Sophie.js currently only has one function: explicitCheck();

The following code snippet will display all information that should be needed. If you need more, feel free to fork this project! Pull Requests are welcome!
```
const sophie = require('sophie.js') // Declare that you need Sophie.js

sophie.explicitCheck("1").then(function(result) {
console.log(result) // Output the results
console.log(result.score) // How explicit? (0-5)
console.log(result.confidence) // How sure is Sophie?
console.log(result.points) // How many points would this user get from Sophiebot?
})
```

If you wish to put the results in a variable, be sure to use something like `const` 