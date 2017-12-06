
  var config = {
    apiKey: "AIzaSyCYhqQq_ekhIZeZPe9-kXHsn5SwU3K870U",
    authDomain: "famescrape.firebaseapp.com",
    databaseURL: "https://famescrape.firebaseio.com",
    projectId: "famescrape",
    storageBucket: "famescrape.appspot.com",
    messagingSenderId: "1027592950865"
  };
  firebase.initializeApp(config);

var provider = new firebase.auth.GoogleAuthProvider();
    var user;

$(document).ready(function() {

   function login() {
        firebase.auth().signInWithPopup(provider).then(function(result) {
          console.log(result);
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          user = result.user;
          //sessionStorage.setItem("user", JSON.stringify(user));
        }).catch(function(error) {
          console.log(error);
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
        });
        // Redirect to profile page after login
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            window.location = "profile.html?uid=" + user.uid;
          }
        });
      }

      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          //add new user logged in user to firebase
          addNewUser(user);
          $("#button2").html("<a class='nav-link' id='profile-link' href='#'>Profile</a>");
          //Navigate to profile page
          $(document).on("click", "#profile-link", function() {
            window.location = "profile.html?uid=" + user.uid;
          });
        }
      });

      function addNewUser(user) {
      //create user Object
      var userObj = {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        bio: "",
        personal: "",
      }

      //check if user is in firebase if not add new user
      var uniqueUser = firebase.database().ref("users").child(user.uid);
      uniqueUser.once("value")
        .then(function(snapshot) {
          if (!snapshot.exists()) {
            uniqueUser.set(userObj);
          }

        });

    };