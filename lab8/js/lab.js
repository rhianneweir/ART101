// index.js - FUNCTIONS
// Author: Rhianne Weir
// Date: 10-28-24

// Constants

// Functions

function addingStuff(x) {
  return x+x ;
}
function squared(x){
  return x*x;
}
function main() {
  console.log("Main function started.");
  //let res = addingStuff(2);
  let xx = squared(3);
  const nums = [2, 5, 10, 15];
 let res = nums.map(addingStuff);
  document.writeln("Result: <pre>", 
    JSON.stringify(res, null, '\t'), "</pre>");
}

// let's get this party started
main();
