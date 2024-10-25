// index.js - Array
// Author: Rhianne Weir
// Date: 10-24-24

// Constants
const myTransport = ["I walk", "bus", "my friends drive me"];

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
  var myMainRide = {
    make: "Toyota",
    model: "Corolla",
    color: "Black",
    year: 2020,
    age: function(){
      return 2024 - this.year;
    }
  }
  document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
}

// let's get this party started
main();
