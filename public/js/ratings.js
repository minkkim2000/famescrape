var request = require("request");

var nodeArgs = process.argv;

var actorName = "Brad Pitt"; 
// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 2; i < nodeArgs.length; i++) {
  if (i > 2 && i < nodeArgs.length) {
    actorName = actorName + "+" + nodeArgs[i];
  }
  else {
    actorName += nodeArgs[i];
  }
}

var queryUrl = "https://theimdbapi.org/api/find/person?name=" + actorName; 

request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log(JSON.parse(body)[0].image.poster);
  }
});

//module.exports = ratings;


//actor array counter


// Grabbing text the user typed into the search input
//Use this line of code when adding new actors 


//grab pick from api 
//display
