//set variables and randomize gem numbers
var points = 0;
var targetPoints = Math.floor(Math.random() * 100);
var gem1val = Math.floor(Math.random() * 50);
var gem2val = Math.floor(Math.random() * 10);
var gem3val = Math.floor(Math.random() * 10);
var gem4val = Math.floor(Math.random() * 10);
$("#targetScore").html(targetPoints);

//Create a win scenario

//create function for resetting the game when win condition is met

//set gems to register when clicked and update the DOM
$(document).ready(function() {

    $("#gem1").on("click", (function() {
        
        points += gem1val;
        console.log(gem1val);
        $("#totalScore").html("<h3>Total Points: " + points);
        
    }));

    $("#gem2").on("click", (function() {
        
        points += 5;
        $("#totalScore").html("<h3>Total Points: " + points);
        
    }));

    $("#gem3").on("click", (function() {
        
        points += 20;
        $("#totalScore").html("<h3>Total Points: " + points);
        
    }));

    $("#gem4").on("click", (function() {
        
        points += 20;
        $("#totalScore").html("<h3>Total Points: " + points);
        
    }));

});
