debugger

var liriMain = require("./liri.js")
var fs = require("fs");


exports.doThis = function() {
  console.log("this works");
  debugger 


  fs.readFile('random.txt', "utf8", function(err, data) {
    if (err) {
      throw err;
    }

    console.log(data);                                   

    var parameters = data.split(",");
    console.log(parameters);

    var parameter1 = parameters[0];
    console.log(parameter1);

    var parameter2 = parameters[1];
    console.log(parameter2);

    liriMain.taskDoThis(parameter1, parameter2);

  });

};