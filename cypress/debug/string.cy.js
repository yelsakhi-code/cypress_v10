var abc="application";  // "application welcome"

//console.log(abc.length)
//const appIindex = welcome.indexOf("application");
//console.log(abc.indexOf("application"))
let newString = "";
for (let i=abc.length; i>=0 ; i-- ){
  let char= abc.charAt(i);
  newString = newString + char;

  //console.log(welcome.indexOf("welcome"))
 
}
console.log(newString)
/*
var wIndex = welcome.indexOf("w")
var eIndex = welcome.indexOf("t")
var secondString = welcome.substring(wIndex, eIndex);

var appIndex= welcome.indexOf("application")
var firstString = welcome.substring(appIndex, welcome.length);
console.log(secondString);
console.log(firstString);
var newString =firstString +" "+ secondString;

console.log(newString)

//"application welcome"*/
