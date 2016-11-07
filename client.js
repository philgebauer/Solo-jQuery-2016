var redCounter = 0;
var yellowCounter = 0;
var greenCounter = 0;
var blueCounter = 0;


console.log('hello');

$('document').ready(function() {

    whatButton();
    var color = "";


    function whatButton() {
        $(".color-button").on("click", function() {
            color = $(this).data("color");
            squareColor();
        });
    }


    function squareColor() {

        switch (color) {
            case "red":
                createSquares ()
                redCounter++;
                console.log("this color is", color);
                $("#red").text("Total red: " + redCounter);
                break;
            case "yellow":
                createSquares ()
                yellowCounter++;
                console.log("this color is", color);
                $("#yellow").text("Total yellow: " + yellowCounter);
                break;
            case "green":
                greenCounter++;
                createSquares ()
                $("#green").text("Total green: " + greenCounter);
                console.log("this color is", color);
                break;
            case "blue":
                blueCounter++;
                $("#blue").text("Total blue: " + blueCounter);
                console.log("this color is", color);
                createSquares ()
                break;
            default:
                $('body').append("<p>Not a color! </p>");

        }
        return color;
    }


    function createSquares () {
      $(".container").append('<div class="color-block"></div>');
      var $el = $(".container").children().last();

      $el.append("<div class='color-cube " + color + "'> </div>");

    }

    function counterUpdate () {
      $
    }

});
