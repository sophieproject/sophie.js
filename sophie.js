const fetch = require('node-fetch');
const server = localhost:8080

exports.msgcheck = function(message) {
    try {
    fetch(`http://${server}/model/parse`, {
		method: "post"
      }
      .then(res => {
        return(res)
    }));
    } catch (error){
        return(error)
    }
}
