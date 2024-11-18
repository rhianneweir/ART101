// index.js - BUTTONS
// Author: Rhianne Weir
// Date: 10-28-24
/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.
*/
// Constants

// Functions

function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it
  return inputString.split('').sort().join('');
}


// get value of input field

const userName = $("#user-name").val();

  const userNameSorted = sortString(userName);
  // click listener for button
$("#submit").click(function(){
  
  $("#output").append('<div class="text"><p>' + userNameSorted + '</p></div>');
});

