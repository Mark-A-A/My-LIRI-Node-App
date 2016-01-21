  var Twitter = require('twitter');
 // console.log(Twitter);
 
  var keys = require("./keys.js");
  
  //console.log(keys);
  //console.log(keys.twitterKeys);
  var client = new Twitter(keys.twitterKeys);

  var paramsScreenName = process.argv[3];
  var params = {screen_name: paramsScreenName} ;
  //console.log(paramsScreenName);
  //console.log(params);

exports.searchTwitter = //function() {
  //console.log("accessed file");
// debugger


// var result;

  client.get('statuses/user_timeline', params, function(error, tweets, response){
    debugger
    if (error){
      console.log(error);
    } else if (!error) {
      
      //console.log(tweets);
      //return tweets;

      for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].text);

        function returnTweets(){
          return tweets[i].text;
        };

        if (i > 19) {
          break;
        }

      }
    } //end of else if
        
  });

//} //end of Twitter function export

