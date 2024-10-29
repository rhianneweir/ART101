// index.js - FUNCTIONS
// Author: Rhianne Weir
// Date: 10-28-24

// Constants

// Functions

function nameSort() {
  let userName = prompt("Enter your name here:");
  let sort = userName.split("").sort().join();
  return sort;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
 let a = nameSort(); 
 
  document.writeln("Your sorted name: <pre>", 
    JSON.stringify(a, null, '\t'), "</pre>");
}

// let's get this party started
main();
