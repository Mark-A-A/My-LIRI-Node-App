exports.moviesOMDB = function() {
  
  debugger
  var request = require("request")
  var apiURL = "";
  var movieTitle = process.argv[3]
  var resultStringMovies = "";

  urlOMDBapi();

  function urlOMDBapi() {
    apiURL = "http://www.omdbapi.com/?t=" + movieTitle +"&y=&plot=short&tomatoes=true&r=json"
  
    request(apiURL, function (err, response, body){
      if (err) {
        console.log('Error occurred: ' + err); 
      }

      // if (movieObject.Response === "False") {
      //   movieTitle = "Mr. Nobody"
      //   urlOMDBapi();
      // }

      var movieObject = JSON.parse(body);
      console.log(movieObject);

      var movieTitle = movieObject.Title;                   //Title
      console.log(movieObject.Title);
      console.log(movieTitle);
                              
      var movieYear = movieObject.Year;                     // Year
      console.log(movieYear);

      var moviePlot = movieObject.Plot;                     // Plot
      console.log(moviePlot);
                                                          
      var movieActors = movieObject.Actors;                 // Actors  
      console.log(movieActors);                                        
                                                          
      var movieCountry = movieObject.Country;               // Country
      console.log(movieCountry);    
                                                          
      var movieLanguage = movieObject.Language;             // Language  
      console.log(movieLanguage);                                                       
      
      var movieIMDBrating = movieObject.imdbRating;         // IMDB Rating
      console.log(movieIMDBrating);    
      
      var movieTomatoesRating = movieObject.tomatoRating;   // Rotten Tomatoes Rating
      console.log(movieTomatoesRating);                                                        
      
      var movieTomatoeURL = movieObject.tomatoURL;          // Rotton Tomatoes UrL
      console.log(movieTomatoeURL);                                                        
                                               
      function resultShow(){
        resultString = "Title: " + movieTitle + ", \n"
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