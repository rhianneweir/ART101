// index.js - FUNCTIONS
// Author: Rhianne Weir
// Date: 10-28-24

// Constants

// Functions
function idkyet(){

}

function main() {
  $("#challenge").append("<button id='button-challenge'>Make Special</button>");
// add a click listener to the challenge button
$("#button-challenge").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#challenge").toggleClass("special");
});

}

// let's get this party started
main();
