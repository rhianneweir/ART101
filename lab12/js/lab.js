// index.js - BUTTONS
// Author: Rhianne Weir
// Date: 10-28-24
/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.
*/
// Constants

// Functions

function sortingHat(str){
let length = str.length;
let num = length % 4;
if(num == 0){
  return "Gryffindor";
}else if(num == 1){
  return "Ravenclaw";
}else if(num == 2){
  return "Hufflepuff";
}else{
  return "Slytherin";
}
}


var myButton = document.getElementById("button");
  myButton.addEventListener("click", function(){
    var name = document.getElementById("input").value;
      var house = sortingHat(name);
      newText = "<p>The sorting hat has sorted you into" + house + " ! </p>";
      document.getElementById("output").innerHTML=newText; 

  })



  
$("#button").click(function(){
  
  $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});


