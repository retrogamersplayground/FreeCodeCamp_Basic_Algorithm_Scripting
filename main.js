//Convert Celsius to Fahrenheit
/*
function convertToF(celsius) {
    let fahrenheit = celsius * (9/5) + 32;
    console.log(fahrenheit);
    return fahrenheit;
}
  
  convertToF(0);
*/


//Reverse a String
/*    
function reverseString(str) {
    const arr = str.split('');
    const arr2 = arr.reverse();
    str = arr2.join('');
    return str;
}
  
  
console.log(reverseString("hello"));
console.log(reverseString("Howdy"));
console.log(reverseString("Greetings from Earth"));
*/

//Factorialize a Number
/*
function factorialize(num) {
  if(num === 0) { return 1; }
  return num * factorialize(num - 1);
}

console.log(factorialize(5));
console.log(factorialize(10)); 
console.log(factorialize(20)); 
console.log(factorialize(0)); 
*/


//Find the Longest Word in a String

/*
function findLongestWordLength(str) {
  const words = str.split(' ');
  const sortedWordsByLength = words.sort(function(a,b) {
    return b.length - a.length;
  });
  //console.log(sortedWordsByLength[0].length);
  return(sortedWordsByLength[0].length);
  
}

findLongestWordLength("The quick brown fox jumped over the lazy dog"); 
findLongestWordLength("May the force be with you"); 
findLongestWordLength("Google do a barrel roll"); 
findLongestWordLength("What is the average airspeed velocity of an unladen swallow");
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");
*/

//Return Largest Numbers in Arrays
/*
function largestOfFour(arr) {
  
 
  
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

*/


//Confirm the Ending

function confirmEnding(str, target) {
  
  return str.slice(str.length - target.length) === target;
}

//console.log(confirmEnding("Bastian", "n"));
//console.log(confirmEnding("Congratulation", "on"));

//console.log(confirmEnding("Connor", "n"));

//console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));

//console.log(confirmEnding("He has to give me a new name", "name"));

//console.log(confirmEnding("Open sesame", "same"));

//console.log(confirmEnding("Open sesame", "pen"));

//console.log(confirmEnding("Open sesame", "game"));

//console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"));

//console.log(confirmEnding("Abstraction", "action"));
