//set variables and randomize gem numbers
var points = 0;

var gem1val = Math.floor((Math.random() * 11) + 5) * 10;
var gem2val = Math.floor((Math.random() * 11) + 5) * 10;
var gem3val = Math.floor((Math.random() * 11) + 5) * 10;
var gem4val = Math.floor((Math.random() * 11) + 5) * 10;
var targetPoints = ((gem1val + gem2val + gem3val + gem4val) * 3);
console.log(gem1val);
console.log(gem2val);
console.log(gem3val);
console.log(gem4val);

//create function for resetting the game when win condition is met

function ifWin() {
    alert("Congratulations! You win.");
    points = 0;
    gem1val = Math.floor((Math.random() * 11) + 5) * 10;
    gem2val = Math.floor((Math.random() * 11) + 5) * 10;
    gem3val = Math.floor((Math.random() * 11) + 5) * 10;
    gem4val = Math.floor((Math.random() * 11) + 5) * 10;
    targetPoints = ((gem1val + gem2val + gem3val + gem4val) * Math.floor(Math.random() * 3));
}



//create function for resetting the game when win condition is met

//set gems to register when clicked and update the DOM
$(document).ready(function() {

    //Create a win scenario

    if (points === targetPoints) {
        ifWin();
    };

    $("#targetScore").html("<h3>Target Points: " + targetPoints);

    $("#gem1").on("click", (function() {

        points += gem1val;
        $("#totalScore").html("<h3>Total Points: " + points);
        
    }));

    $("#gem2").on("click", (function() {
        
        points += gem2val;
        $("#totalScore").html("<h3>Total Points: " + points);
        
    }));

    $("#gem3").on("click", (function() {
        
        points += gem3val;
        $("#totalScore").html("<h3>Total Points: " + points);
        
    }));

    $("#gem4").on("click", (function() {
        
        points += gem4val;
        $("#totalScore").html("<h3>Total Points: " + points);
        
    }));

});
