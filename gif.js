$(document).ready(function(){
    // variables
    var topics = ["Survivor", "The Bachelor", "Love Island"];

    // function for displaying the images

    function images() {
        $("#images").empty();
        var input = $(this).attr("data");
        var limit = 10;
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&limit=" + limit + "&api_key=aD1fo0UXpTYcfSTNLvmDA6t3PUeZRwyR";

        $.ajax({
            url: queryURL,
            method: "Get"
        }).then(function(response) {

        }
    }


)}
