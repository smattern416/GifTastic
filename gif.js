$(document).ready(function(){
    // variables
    var topics = ["Survivor", "The Bachelor", "Love Island"];

    // function for displaying the images

    function displayImg() {
        $("#display").empty();
        var search = $(this).attr("data");
        var results = 10;
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&limit=" + limit + "&api_key=aD1fo0UXpTYcfSTNLvmDA6t3PUeZRwyR";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(response) {

            for(var i = 0; i<results; i++){

                var displayDiv = $("<div>");
                displayDiv.addClass("holder");

                var image = $("<img>");
                
                image.attr("src", response.data[i].images.original_still.url);
                image.attr("data-still", response.data[i].images.original_still.url);
                image.attr("data-animate", response.data[i].images.original_still.url);
                image.attr("data-state", "still");
                image.attr("class", "gif");
                displayDiv.append(image);

                var rating = response.data[i].rating;
                var displayRating = $("<p>").text("Rating: " + rating);
                displayDiv.append(displayRating);

                $("#display").append(displayDiv);

            }

        });
    }
    function renderButtons(){
        $("#topics").empty();


        for(var b = 0; b < topics.length; b++){
            var newBtn = $("<button>")
            newBtn.attr("class", "btn btn-default");
            newBtn.attr("id", "search");
            newBtn.attr("data-name", topics[b]);
            newBtn.text(topics[b]);
            $("#topics").append(newBtn);
        }
    }

    function imageControl() {
        var state = $(this).attr("data-state");
        var animate = $(this).attr("data-animate");
        var still = $(this).attr("data-still");

        if(state == "still") {
            $(this).attr("src", stillImage);
            $(this).attr("data-state", "animate");
        }
        else if(state == "animate") {
            $(this).attr("src", stillImage);
            $(this).attr("data-state", "still");
        }
    }
    $("#submitBtn").on("click", function(){
        var search = $("#above-search").val().trim();
        form.reset();
        topics.push(search);

        renderButtons();

        return false;

    }
         
    )
    renderButtons();
    $document.on("click", "#search", displayImg);
    $document.on("click", ".gif", imageChangeState);



});
