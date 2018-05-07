// on click button
$("body").on("click", ".image-button", function () {

    // declare variables
    // queryURL
    var animal = $(this).attr("data-animal");
    var limit = "10";
    var apiKey = "KudX9M9dp6HhlptHRXfCXeY0lRB8fA7y"
    var queryURL = "https://api.giphy.com/v1/gifs/random?" + "api_key=" + apiKey + "&tag=" + animal + "&limit=" + limit;

    // request API with AJAX
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // response from giphy API in JSON form
        console.log(queryURL)
        console.log(response)
        // find image url in JSON
        var results = response.data;

        // create image function**
        // create image tag in html
        var image = $("<img>");
        var stillURL = results.images.fixed_height_still.url;
        var animateURL = results.image_original_url;


        // add source attr
        // add data-state = animate
        // add width = 200px
        function imageTagAttr() {
        image.attr("src", stillURL);
        image.attr("data-state", "still");
        image.attr("width", "200px");
        image.attr("class", "gif");
        image.attr("data-still", stillURL);
        image.attr("data-animate", animateURL);
        }

        // call imageTagAttr function to add attributes to image tag
        imageTagAttr();
        // body.on("click", ".gif", function())
        // on click gif
        image.on("click", function () {
            // add data-still attr
            var image = $(this), state = image.attr("data-state");

            if (state === "still") {
                image.attr("data-state", "animate");
                image.attr("src", image.attr("data-animate"));
            }
            else if (state === "animate") {
                image.attr("data-state", "still");
                image.attr("src", image.attr("data-still"));
            }
        })


        // append img tag to html
        $("#imagesDiv").prepend(image);
    })
})

// add button to search

// search will have id to bind event

// on click 
$("#search-button").on("click", function () {
    // add class image-button
    var newButton = $("<img>");
    imageTagAttr();

    // user input will be data-animal
    var userInput = $("#userInput");
    image.attr("data-animal", userInput);

    // append to div of buttons
    $("#imagesDiv").prepend(image);

})

