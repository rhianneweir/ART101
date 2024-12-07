// index.js - CONDITIONALS
// Author: Rhianne Weir
// Date: 10-28-24
/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.
*/
// Constants

// Functions

$.ajax({
  // The URL for the request (from the api docs)
  url:"https://pokeapi.co/api/v2/ability/1/",
  // The data to send (will be converted to a query string)
  data: {
    "count": 248,
    "next": "https://pokeapi.co/api/v2/ability/?limit=20&offset=20",
    "previous": null,
    "results": [
      {
        "name": "stench",
        "url": "https://pokeapi.co/api/v2/ability/1/"
      }
    ],
  
  // Whether this is a POST or GET request
  type: "GET",
  // The type of data we expect back
  dataType: "json",
  // What do we do when the api call is successful
  //   all the action goes in here
  success: function(data) {
      // do stuff
      console.log(data);
  },
},
  // What we do if the api call fails
  error: function (jqXHR, textStatus, errorThrown) { 
      // do stuff
      console.log("Error:", textStatus, errorThrown);
  }
})

var myButton = document.getElementById("activate");
  myButton.addEventListener("click", function(){
      document.getElementById("output")
  })



  



