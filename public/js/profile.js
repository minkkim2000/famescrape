var request = require("request");

$(document).ready(function() {}

var imageSource = JSON.parse(body).image.poster;

$("#search-btn").on("click", function() {
  // save the character they typed into the character-search input
  	var searchedCharacter = $("#character-search").val().trim();
  // replace any spaces between that character with no space
  // (effectively deleting the spaces). Make the string lowercase
  	searchedCharacter = searchedCharacter.replace(/\s+/g, "+").toLowerCase();
  	var queryUrl = "https://theimdbapi.org/api/find/person?name=" + searchedCharacter;
  	request(queryUrl, function(error, response, body){
		if (!error && response.statusCode === 200) {
    	return JSON.parse(body).image.poster;
  	}
  // run an AJAX GET-request for our servers api,
  // including the user's character in the url
  	$.get("/api/" + searchedCharacter, function(data) {
    // log the data to our console
    	console.log(data);
    //empty to well-section before adding new content
    	$("#well-section").empty();
    // if the data is not there, then return an error message
    	if (!data) {
    	//this should never work
     		$("#well-section").append("<h2> Please type another celebrity name. </h2>");
    	}
    // otherwise
    	else {
      // append the character name
      		$("#well-section").append("<h2>" + data.name + "</h2>");
      // the role
      		$("#well-section").append("<img src=:" + imageSource + ">");
    	}
  	});

  	$.post("/api/" + searchedCharacter, function(data) {
  		searchedCharacter.val("");
});
