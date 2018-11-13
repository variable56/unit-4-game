$(document).ready(function () {
    //set variables and randomize gem numbers
    var points = 0;
    var gem1val = Math.floor((Math.random() * 11) + 5) * 10;
    var gem2val = Math.floor((Math.random() * 11) + 5) * 10;
    var gem3val = Math.floor((Math.random() * 11) + 5) * 10;
    var gem4val = Math.floor((Math.random() * 11) + 5) * 10;
    var targetPoints = Math.floor((Math.random() * 11) + 10) * 100;
    var wins = 0;
    var losses = 0;
    console.log(gem1val);
    console.log(gem2val);
    console.log(gem3val);
    console.log(gem4val);

    //create function for resetting the game when win condition is met

    function ifWin() {
    points = 0;
    gem1val = Math.floor((Math.random() * 11) + 1) * 5;        
    gem2val = Math.floor((Math.random() * 11) + 1) * 5;
    gem3val = Math.floor((Math.random() * 11) + 1) * 10;
    gem4val = Math.floor((Math.random() * 11) + 1) * 10;
    targetPoints = Math.floor((Math.random() * 11) + 10) * 100;
    $("#targetScore").html("<h3>Target Points: " + targetPoints);
    $("#totalScore").html("<h3>Total Points: " + points);
    wins++;
    $("#wins").html("<h3>Wins: " + wins);
    

    console.log(gem1val);
    console.log(gem2val);
    console.log(gem3val);
    console.log(gem4val);
    console.log(targetPoints);
    alert("You Win! Congratulations!!!")
    }

    function ifLose() {
    points = 0;
    gem1val = Math.floor((Math.random() * 11) + 1) * 5;       
    gem2val = Math.floor((Math.random() * 11) + 1) * 5;
    gem3val = Math.floor((Math.random() * 11) + 1) * 5;
    gem4val = Math.floor((Math.random() * 11) + 1) * 5;
    targetPoints = Math.floor((Math.random() * 11) + 10) * 100;
    $("#targetScore").html("<h3>Target Points: " + targetPoints);
    $("#totalScore").html("<h3>Total Points: " + points);
    losses++;
    $("#losses").html("<h3>Losses: " + losses);
    

    console.log(gem1val);
    console.log(gem2val);
    console.log(gem3val);
    console.log(gem4val);
    console.log(targetPoints);
    alert("Too bad.  Better luck next time");
    }

    //set gems to register when clicked and update the DOM

    $("#targetScore").html("<h3>Target Points: " + targetPoints);
    $("#wins").html("<h3>Wins: " + wins);
    $("#losses").html("<h3>Losses: " + losses);

    $("#gem1").on("click", (function () {

        points += gem1val;
        $("#totalScore").html("<h3>Total Points: " + points);
        if (points === targetPoints) {
            ifWin();
        }
        if (points > targetPoints) {
            ifLose();
        }

    }));

    $("#gem2").on("click", (function () {

        points += gem2val;
        $("#totalScore").html("<h3>Total Points: " + points);
        if (points === targetPoints) {
            ifWin();
        }
        if (points > targetPoints) {
            ifLose();
        
        }
        
    }));

    $("#gem3").on("click", (function () {

        points += gem3val;
        $("#totalScore").html("<h3>Total Points: " + points);
        if (points === targetPoints) {
            ifWin();
        }
        if (points > targetPoints) {
            ifLose();
        }
        
    }));

    $("#gem4").on("click", (function () {

        points += gem4val;
        $("#totalScore").html("<h3>Total Points: " + points);
        if (points === targetPoints) {
            ifWin();
        }
        if (points > targetPoints) {
            ifLose();
        }
        
    }));

});

