// index.js - FUNCTIONS
// Author: Rhianne Weir
// Date: 10-28-24

// Constants

// Functions

// function spookify() {
//   let userName = prompt("Enter your name here to get your spooky persona: ");
//   if(userName.toLower() == "andres"){
//     return userName;
//   }
//   var nameArray = ["scary ", "spooky ", "creepy "];
//   let please = nameArray[Math.floor(Math.random()* 4)];
//   return please + userName;
// }

// function main() {
//   console.log("Main function started.");
//   // the code that makes everything happen
//  let a = spookify(); 
 
//   document.writeln("Your spooky name: <pre>", 
//     JSON.stringify(a, null, '\t'), "</pre>");
// }

function spookify() {
  let userName = prompt("Enter your name, credit card number, expiration date, and security code to get spooky:");
  let nah = "Andres";
    if(userName.localeCompare(nah, undefined, { sensitivity: 'base' }) === 0) {
  return userName;
} else {

 const spookArray = ["spooky ", "scary ", "creepy "];
 const ran = Math.floor(Math.random() * spookArray.length);
 const plz = spookArray[ran] + userName; 
  return  plz;
}
}



function main() {
  console.log("Main function started.");
  // the code that makes everything happen
 let a = spookify(); 
 
  document.writeln("Your spooky name: <pre>", 
    JSON.stringify(a, null, '\t'), "</pre>");
}



// let's get this party started
main();
