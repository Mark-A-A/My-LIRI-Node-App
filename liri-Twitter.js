module.exports.searchTwitter = function() {

debugger
var Twitter = require('twitter');

var keys = require("./keys.js");
var client = new Twitter({keys.twitterKeys});

var paramsScreenName = process.argv[3];
var params = {screen_name: 'paramsScreenName'} ;
console.log(paramsScreenName);

var result;

client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (error){
    console.log(error);
  }else if (!error) {
    console.log(tweets);
    
  }
});

}

