module.exports = function() {
  var spotify = require('spotify');
  var searchQuery = process.argv[3]
 
  spotify.search({ type: 'track', query: searchQuery }, function(err, data) {
      if ( err ) {
          console.log('Error occurred: ' + err);
          return;
      }
   
      // Do something with 'data'
      console.log(data);
      return data;
  });
}

