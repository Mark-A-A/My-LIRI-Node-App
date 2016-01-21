exports.doThis = function() {
  debugger 
  console.log("this works");
  
  var fs = require("fs");

  fs.readFile('random.txt', "utf8", function(err, data) {
    if (err) {
      throw err;
    }
    console.log(data);

    var textSplit = data.split(", ");
    console.log(textSplit);

    var parameter1 = textSplit[0];
    var parameter2 = textSplit[1];

    

  });

};