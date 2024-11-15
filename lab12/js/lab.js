// index.js - BUTTONS
// Author: Rhianne Weir
// Date: 10-28-24
/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.
*/
// Constants

// Functions




function main() {
  const newText = generateRandomText();
  // click listener for button
$("#swag").click(function(){
  
  $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});

}

// let's get this party started
main();
