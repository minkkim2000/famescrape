$(document).ready(function() {
            // Gets an optional query string from our url (i.e. ?post_id=23)
            var url = window.location.search;
            var postId;
            // Sets a flag for whether or not we're updating a post to be false initially
            var updating = false;

            // If we have this section in our url, we pull out the post id from the url
            // In localhost:8080/ratigs?post_id=1, postId is 1
            if (url.indexOf("?post_id=") !== -1) {
                postId = url.split("=")[1];
                getPostData(postId);
            }
        }
        // Getting jQuery references to the post like, dislike, whoThat
        var like = $("#like");
        var dislike = $("#dislike");
        var whoThat = $("#whoThat");
        // Adding an event listener for when the form is submitted
        $(cmsForm).on("submit", function handleFormSubmit(event) {
            event.preventDefault();

            // Constructing a newPost object to hand to the database
            var newPost = {
                like: likeInput.val().trim(),
                dislike: dislikeInput.val().trim(),
                whoThat: whoThatInput.val().trim()
            };

            console.log(newPost);

            // If we're updating a post run updatePost to update a post
            // Otherwise run submitPost to create a whole new post
            if (updating) {
                newPost.id = postId;
                updatePost(newPost);
            } else {
                submitPost(newPost);
            }
        });

        // Include the request npm package 
        var request = require("request");

        // Store all of the arguments in an array
        var nodeArgs = process.argv;

        // Create an empty variable for holding the movie name
        var actorName = "";

        // Loop through all the words in the node argument
        // And do a little for-loop magic to handle the inclusion of "+"s
        for (var i = 2; i < nodeArgs.length; i++) {

            if (i > 2 && i < nodeArgs.length) {

                actorName = actorName + "+" + nodeArgs[i];

            } else {

                actorName += nodeArgs[i];

            }
        }

        // Then run a request to the IMDB API with the movie specified
        var queryUrl = "http://www.theimdbapi.org/api/find/person?name=" + actorName;

        // This line is just to help us debug against the actual URL.
        console.log(queryUrl);

        request(queryUrl, function(error, response, body) {

            // If the request is successful
            if (!error && response.statusCode === 200) {

                // Parse the body of the site and recover just the imdbRating
                console.log("Actor Name: " + JSON.parse(body).title);
                console.log(JSON.parse(body).image poster);

            }
        });







        // function loadCelebs() {
        // 	for ( var i = 0; i < db.length; i++ ) {
        // 		// console.log(db[i].image)
        // 		$('.celebs').append(
        // 			'<div class="celeb">' +
        //   			'<div class="image">' +
        //   				'<img src="' + db[i].image + '" alt="">' +
        //   			'</div>' +
        //   			'<h3>' + db[i].name + '</h3>' +
        //   			'<div class="info">' +
        //   				'<span>Likes: ' + db[i].likes + '</span>' +
        //     			'<span>Dislikes: ' + db[i].dislikes + '</span>' +
        //   			'</div>' +
        //   			'<button>Like</button>' +
        //   			'<button>Dislike</button>' +
        //   		'</div>'
        // 		);
        // 	}
        // }

        // loadCelebs();