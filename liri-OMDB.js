exports.moviesOMDB = function() {
  
  debugger
  var request = require("request")
  var apiURL = "";
  var movieTitle = process.argv[3]
  var resultStringMovies = "";
  
  urlOMDBapi(movieTitle);

  function urlOMDBapi(movie) {
    debugger
    
    apiURL = "http://www.omdbapi.com/?t=" + movie +"&y=&plot=short&tomatoes=true&r=json"
    //console.log(apiURL);
    
    request(apiURL, function (err, response, body){
      
      
      
      if (err) {
        console.log('Error occurred: ' + err); 
      } 
     
      //console.log(response);

      var movieObject = JSON.parse(body);
      //console.log(movieObject);

      debugger

      if (movieObject.Response === "False") {
        var movieTitle2 = "Mr. Nobody";
        //console.log(movieTitle2);
        urlOMDBapi(movieTitle2);
      }
      
      var movieName = movieObject.Title;                   //Title
      // console.log(movieObject.Title);
      // console.log(movieName);
                              
      var movieYear = movieObject.Year;                     // Year
      // console.log(movieYear);

      var moviePlot = movieObject.Plot;                     // Plot
      // console.log(moviePlot);
                                                          
      var movieActors = movieObject.Actors;                 // Actors  
      // console.log(movieActors);                                        
                                                          
      var movieCountry = movieObject.Country;               // Country
      // console.log(movieCountry);    
                                                          
      var movieLanguage = movieObject.Language;             // Language  
      // console.log(movieLanguage);                                                       
      
      var movieIMDBrating = movieObject.imdbRating;         // IMDB Rating
      // console.log(movieIMDBrating);    
      
      var movieTomatoesRating = movieObject.tomatoRating;   // Rotten Tomatoes Rating
      // console.log(movieTomatoesRating);                                                        
      
      var movieTomatoeURL = movieObject.tomatoURL;          // Rotton Tomatoes UrL
      // console.log(movieTomatoeURL);                                                        
                                               
      function resultShow(){
        resultString = "Title: " + movieName + ", \n"
                       + "Year: " + movieYear + ", \n"
                       + "Plot: " + moviePlot + ", \n"
                       + "Actors: " + movieActors + ", \n"
                       + "Country: " + movieCountry+ ", \n"
                       + "Language: " + movieLanguage+ ", \n"
                       + "IMDB Rating: " + movieIMDBrating+ ", \n"
                       + "Rotten Tomatoes Rating: " + movieIMDBrating+ ", \n"
                       + "Rotten Tomatoes Link: " + movieIMDBrating+ ", \n"
          console.log(resultString); 
          return resultString;
      }
        
      resultShow();
    })
  }
}