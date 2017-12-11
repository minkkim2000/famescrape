// when user hits the search-btn
$("#search-btn").on("click", function() {

    // save the actor they typed into the actor-search input
    var searchedActor = $("#actor-search").val().trim();

    searchedActor = searchedActor.replace(/\s+/g, "").toLowerCase();

    // run an AJAX GET-request for our servers api,
    // including the user's actor in the url
    $.get("/api/" + searchedActor, function(data) {
        // log the data to our console
        console.log(data);
        //empty to photo before adding new content
        $("#photo").empty();
        // if the data is not there, then return an error message
        if (!data) {
            $("#photo").append("<h2> Please search new actor/actress</h2>");
        }
        // otherwise
        else {
            // append the actor name
            $("#photo").append("<h2>" + data.name + "</h2>");
        }

    });

});


function LikeDislike(element, options) {
    this.element = element;
    this.opts = $.extend({}, defaults, options);
    this.init();
};


$("#rating").likeDislike();
$("#rating").likeDislike({
    click: function(btnType, likes, dislikes, event) {
        var likesElem = $(this).find(".likes");
        var dislikesElem = $(this).find(".dislikes");
        likesElem.text(parseInt(likesElem.text()) + likes);
        dislikesElem.text(parseInt(dislikesElem.text()) + dislikes);
    }
});

$("#rating").likeDislike({
    reverseMode: true;
    activeBtn: localStorage["key"] ? localStorage["key"] : "",
    click: function(btnType, likes, dislikes, event) {
        var self = this;

        // lock buttons
        self.readOnly(true);

        // send data to server
        $.ajax({
            url: "url",
            type: "GET",
            data: "id=1" + "&likes=" + likes + "&dislikes=" + dislikes,
            success: function(data) {
                // show new values
                $(self).find(".likes").text(data.likes);
                $(self).find(".dislikes").text(data.dislikes);
                localStorage["key"] = btnType;

                // unlock the buttons
                self.readOnly(false);
            }
        });
    }
});

$("#rating").likeDislike({
    click: null, // callback
    beforeClick: null, // callback
    initialValue: 0,
    reverseMode: false,
    readOnly: false,
    likeBtnClass: "like",
    dislikeBtnClass: "dislike",
    activeClass: "active",
    disableClass: "disable"
});