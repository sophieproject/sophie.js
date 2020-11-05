const fetch = require('node-fetch');

exports.auth = function(tokeni, serveri) {
    token = tokeni
    server = serveri
    return
  }

exports.lookup = function(username) {
    try {
    fetch(`http://${server}/api/pedodb/${username}`, {
		method: "post"
      }
      .then(res => {
          return(res)
      }));
    } catch (error){
        return(error)
    }
 }

exports.msgcheck = function(message) {
    try {
    fetch(`http://${server}/api/ai/${message}`, {
		method: "post"
      }
      .then(res => {
        return(res)
    }));
    } catch (error){
        return(error)
    }
}