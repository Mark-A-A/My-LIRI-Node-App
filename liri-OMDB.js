module.exports = function() {
  var request = require("request")
  var apiURL = "";
  var movieTitle = process.argv[3]
  function urlOMDBapi() {
    apiURL = "http://www.omdbapi.com/?t=" + movieTitle+"&y=&plot=short&r=json"
  }

  request(apiURL, function (err, response, body){
    var movieObject = JSON.parse(body);
    console.log(movieObject);

    var movieTitle = movieObject.title;
    var movieDescription = movieObject.description;

    return movieDescription;

  })
}