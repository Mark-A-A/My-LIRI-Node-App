debugger

var liriTask = process.argv[2];
//console.log(liriCase);

var liriSearch = process.argv[3];
//console.log(liriParameter);

//var nodeResult;

//LIRI Functions

var liriMySpotify = require("./liri-Spotify.js");

var liriMyMovies = require("./liri-OMDB.js");

var liriMyDoThis = require("./liri-Do-This.js");

var liriMyTwitter = require("./liri-Twitter.js");

function liri(param1, param2) {
  debugger
  switch(param1) {                                  // Cases
    case "my-tweets":                                 // my-tweets
      liriMyTwitter.searchTwitter();
      //liriMyTwitter = require("./liri-Twitter.js");//.searchTwitter();
      break;
    case "spotify-this-song":                         // spotify-this-song
      liriMySpotify.searchSpotify();
      //liriMySpotify = require("./liri-Spotify.js");
      break;
    case "movie-this":                                // movie-this
      liriMyMovies.moviesOMDB();
      break;
    case "do-what-it-says":                           // do-what-it-says
      liriMyDoThis.doThis();
      break;
  }


}


// function doThisLIRI(){
//   fs.readFile('random.txt', "utf8", function(err, data) {
//     if (err) {
//       throw err;
//     }

//     console.log(data);

//     var textSplit = data.split(", ");
//     console.log(textSplit);

//     var parameter1 = textSplit[0];
//     var parameter2 = textSplit[1];

//     switch(parameter1) {                                  // Cases
//       case "my-tweets":                                 // my-tweets
//         liriMyTwitter.searchTwitter(parameter2);
//         break;
//       case "spotify-this-song":                         // spotify-this-song
//         liriMySpotify.searchSpotify(parameter2);
//         break;
//       case "movie-this":                                // movie-this
//         liriMyMovies.moviesOMDB(parameter2);
//         break;
//     }

//   });
// }

//console.log(nodeResult);

exports.taskDoThis = liri;


liri(liriTask, liriSearch);


