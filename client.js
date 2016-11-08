//global variables


var redCounter = 0;
var yellowCounter = 0;
var greenCounter = 0;
var blueCounter = 0;

var color = "";

$('document').ready(function() {

findColor();

//function finds the current color based on the button clicked
    function findColor() {
        $(".color-button").on("click", function() {
            color = $(this).data("color");
            squareColor();
        });
    }

//based on what color was clicked, this function adds to the counter,
//appends the new count to the counter, and adds the new sqaure to
//the DOM
    function squareColor() {

        switch (color) {
            case "red":
                createSquares ()
                redCounter++;
                $("#red").text("Total red: " + redCounter);
                break;
            case "yellow":
                createSquares ()
                yellowCounter++;
                $("#yellow").text("Total yellow: " + yellowCounter);
                break;
            case "green":
                greenCounter++;
                createSquares ()
                $("#green").text("Total green: " + greenCounter);
                break;
            case "blue":
                blueCounter++;
                $("#blue").text("Total blue: " + blueCounter);
                createSquares ()
                break;
            default:
                $('body').append("<p>Not a color! </p>");

        }
        return color;
    }


//this function grabs the color, and appends the right colored square to
//the DOM
    function createSquares () {
      $(".container").append('<div class="color-block"></div>');
      var $el = $(".container").children().last();

      $el.append("<div class='color-cube  " + color + "'> </div>");
      $el.css("float", "left");

    }
});
