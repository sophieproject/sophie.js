const fetch = require('node-fetch');
const server = 'localhost:5005'

exports.explicitCheck = function(message) {
	return new Promise(function(resolve, reject) {
	message = message.replace(/\//g, "")
			const body = {
				text: message,
			}
			fetch(`http://${server}/model/parse/`, {
					method: "post",
					body: JSON.stringify(body),
					headers: {
						"Content-Type": "application/json"
					}
				}).then(res => res.json())
				.then(json => {
					var result = new Object;
					result.score = parseInt(json.intent.name)
					result.confidence = json.intent.confidence
					result.points = result.score * result.confidence
					result.footer = "This data is from the Sophie AI, and is not user data. We will never provide user PII in our APIs."
					resolve(result);
					})
				})
				.catch(error => {
					console.log("The connection could not be made, try changing the URL in index.js or waiting. If you think Sophie's AI servers may be offline, check Sophie's API Documentation for server information and how to check status.")
					reject(error)
				})
			}