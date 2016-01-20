exports.searchSpotify = function() {
  debugger
  var spotify = require('spotify');
  var searchQuery = process.argv[3]
  var spotifyData;
  var artistName= "";
      var songName = "";
      var albumName = "";
      var previewLink = "";
      var resultString = "";

  spotify.search({ type: 'track', query: searchQuery }, function(err, data) {
      if (err ) {
          console.log('Error occurred: ' + err);
          return;
      } else {


   
      //  Do something with 'data'
      // console.log(data);
      // console.log(data.tracks.items[0].artists[0].name);    //artist name
      // console.log(data.tracks.items[0].name);               //song name
      // console.log(data.tracks.items[0].preview_url);        //preview link
      // console.log(data.tracks.items[0].album.name);         // Album name
      
      spotifyData = data;
      console.log(spotifyData);

      

      for (var i = 0; i < data.tracks.items.length; i++){
        debugger
        artistName = data.tracks.items[i].artists[0].name;
        songName = data.tracks.items[i].name;
        albumName = data.tracks.items[i].album.name;
        previewLink = data.tracks.items[i].preview_url;
        
        function resultShow(){
          resultString = "Artist: " + artistName + ", \n";
                       + "Song Title: " + songName + ", \n"
                       + "Album: " + albumName + ", \n"
                       + "Preview Link: " + previewLink
          console.log(resultString); 
          return resultString;
        }

        resultShow();
        
      } // end of loop


      
    }

  });
}

