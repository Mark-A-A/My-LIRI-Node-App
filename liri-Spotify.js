exports.searchSpotify = function() {
  debugger
  var spotify = require('spotify');
  var searchQuery = process.argv[3]
 
  var artistName= "";
  var songName = "";
  var albumName ="";
  var previewLink ="";

  spotify.search({ type: 'track', query: searchQuery }, function(err, data) {
      if ( err ) {
          console.log('Error occurred: ' + err);
          return;
      }
   
      // Do something with 'data'
      console.log(data);
      console.log(data.tracks.items[0].artists[0].name);    //artist name
      console.log(data.tracks.items[0].name);               //song name
      console.log(data.tracks.items[0].preview_url);        //preview link
      console.log(data.tracks.items[0].album.name);         // Album name
      return data;


  });
}

