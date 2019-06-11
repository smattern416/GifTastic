$(document).ready(function(){
    // variables
    var topics = ["Survivor", "The Bachelor", "Love Island"];

    // function for displaying the images

    function display() {
        $("#display").empty();
        var input = $(this).attr("data");
        var results = 10;
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&results=" + results + "&api_key=aD1fo0UXpTYcfSTNLvmDA6t3PUeZRwyR";

        $.ajax({
            url: queryURL,
            method: "Get"
        }).then(function(response) {

            for(var i = 0; i<results; i++){

                var image = $("<img>");
                
                image.attr("src", response.data[i].images.original_still.url);
                image.attr("data-still", response.data[i].images.original_still.url);
                


            }

        }
    }


})
