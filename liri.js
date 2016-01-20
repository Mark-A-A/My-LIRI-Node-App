debugger
var liriCase = process.argv[2];
//console.log(liriCase);

var liriParameter = process.argv[3];
//console.log(liriParameter);

var nodeResult;

//LIRI Functions

var liriMySpotify = require("./liri-Spotify.js");
var liriMyMovies = require("./liri-OMDB.js");
var liriMyDoThis = require("./liri-Do-This.js");
var liriMyTwitter = require("./liri-Twitter.js");


switch(liriCase) {                                  // Cases
  case "my-tweets":                                 // my-tweets
    nodeResult = liriMyTwitter.searchTwitter(liriParameter);
    break;
  case "spotify-this-song":                         // spotify-this-song
    liriMySpotify.searchSpotify(liriParameter);
    break;
  case "movie-this":                                // movie-this
    liriMyMovies.moviesOMDB(liriParameter);
    break;
  case "do-what-it-says":                           // do-what-it-says
    liriMyDoThis;
    break;

}

//console.log(nodeResult);


