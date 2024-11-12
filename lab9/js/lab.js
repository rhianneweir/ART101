// index.js - FUNCTIONS
// Author: Rhianne Weir
// Date: 10-28-24

// Constants

// Functions



// add button to challenge section
$("#Challenge").append("<button id='button-challenge'>Make Special</button>");

  // add a click listener to the challenge button
  $("#button-challenge").click(function(){

     // now add (or subtract) the "special" class to the section
     $("#Challenge").toggleClass("special");
})  
$("#Problems").append("<button id='button-problems'>Make Special</button>");

// add a click listener to the challenge button
$("#button-problems").click(function(){

  // now add (or subtract) the "special" class to the section
  $("#Problems").toggleClass("special");
}) 
$("#Results").append("<button id='button-results'>Make Special</button>");

// add a click listener to the challenge button
$("#button-results").click(function(){

  // now add (or subtract) the "special" class to the section
  $("#Results").toggleClass("special");
})  



