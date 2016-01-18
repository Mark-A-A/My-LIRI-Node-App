
var liriCase = process.argv(2);

//LIRI Functions
var liriMyTwitter = require("./liri-Twitter.js");
var liriMySpotify = require("./liri-Spotify.js");
var liriMyMovies = require("./liri-OMDB.js");
var liriMyDoThis = require("./liri-Do-This.js");

// Cases
// my-tweets
// spotify-this-song
// movie-this
// do-what-it-says

switch(liriCase) {
  case "my-tweets":
    liriMyTwitter;
    break;
  case "spotify-this-song":
    liriMySpotify;
    break;
  case "movie-this":
    liriMyMovies;
    break;
  case "do-what-it-says":
    liriMyDoThis;
    break;
}


