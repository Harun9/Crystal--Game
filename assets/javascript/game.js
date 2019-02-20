
//Selects a random number to be shown at the start of the game
// Number should be should be between 20-100
$(document).ready(function () {
    var Random = Math.floor(Math.random() * 80 + 20)
    // now we will append a random number to the randomNumber id in html doc 
    $("#RandomNumber").text(Random);

    //  Decaring variables for tallies
    var wins = 0;
    var losses = 0;
    var Totalscore = 0;
    //append to the html id
    $("#totalwins").text(wins);
    $("#totallosses").text(losses);


    // Select random numbers for each of the crystal. each number will be different at the start of each game
    // numbers will be between 2-8
    var first = Math.floor(Math.random() * 8 + 2);
    var second = Math.floor(Math.random() * 8 + 2);
    var third = Math.floor(Math.random() * 8 + 2);
    var fourth = Math.floor(Math.random() * 8 + 2);


    function winner() {
        alert("You win");
        wins++
        $("#totalwins").text(wins);

    }

    function lose() {
        alert("you lost")
        losses++
        $("#totallosses").text(losses)

    }



    //setting up the onclick function
    $("#check1").on("click", function () {
        Totalscore = Totalscore + first;
        $("#Guess").text(Totalscore);
        if (Totalscore === Random) {
            winner();

        }
        else if (Totalscore > Random) {
            lose();
        }

    });

    $("#check2").on("click", function () {
        Totalscore = Totalscore + second;
        $("#Guess").text(Totalscore);
        if (Totalscore === Random) {
            winner();


        }

        else if (Totalscore > Random) {
            lose();
        }

    });

    $("#check3").on("click", function () {
        Totalscore = Totalscore + third;
        $("#Guess").text(Totalscore);
        if (Totalscore === Random) {
            winner();

        }
        else if (Totalscore > Random) {
            lose();
        }

    });
    $("#check4").on("click", function () {
        Totalscore = Totalscore + fourth;
        $("#Guess").text(Totalscore);
        if (Totalscore === Random) {
            winner();

        }
        else if (Totalscore > Random) {
            lose();

        }



    });


});









