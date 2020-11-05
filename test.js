const sophie = require('./sophie.js')
sophie.auth('0', 'localhost:8080');
console.log("Auth Passed")
console.log(sophie.lookup('000'))
console.log(sophie.msgcheck('Testing'))