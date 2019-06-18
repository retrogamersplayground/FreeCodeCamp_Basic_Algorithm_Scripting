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



/*
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
*/



//Repeat a String Repeat a String
/*
function repeatStringNumTimes(str, num) {
  var newStr = "";

  for(let i = 1; i <= num; i++) {
    if(num > 0) {
      newStr = newStr + str;
      }
    }
    return newStr;
}
    repeatStringNumTimes("*", 3);
    repeatStringNumTimes("abc", 3); 
    repeatStringNumTimes("abc", 4);
    repeatStringNumTimes("abc", 1);
    repeatStringNumTimes("*", 8);
    repeatStringNumTimes("abc", -2);
*/


//Truncate a String
/*
function truncateString(str, num) {
  let arr = str.split('');
  let arrRev = arr.reverse();
  let newStr = arrRev.join('');

  let sliced = newStr.slice(-num);
  let slicedArr = sliced.split('');
  let slicedArrRev = slicedArr.reverse();
  let newSlicedStr = slicedArrRev.join('');

  let slicedC = newSlicedStr + '...';

  if(newSlicedStr === str) {
    console.log(str);
    return str;
  } else {
    console.log(slicedC);
    return slicedC;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
truncateString("Peter Piper picked a peck of pickled peppers", 11);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
truncateString("A-", 1);
truncateString("Absolutely Longer", 2);
*/


//Finders Keepers



//findElement([1, 2, 3, 4], num => num % 2 === 0);
//findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });
//findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; });


//Falsey Bouncer
/*
function bouncer(arr) {
let i;
  
    if(arr[i] != false) {
      console.log(arr[i]);
    }
  }


bouncer([7, "ate", "", false, 9]);
//bouncer(["a", "b", "c"]);
//bouncer([false, null, 0, NaN, undefined, ""]);
//bouncer([1, null, NaN, 2, undefined]);

*/

//Where Do I Belong
//completed
/*
function getIndexToIns(arr, num) {
  arr.push(num);
  let newArr = arr.sort(function(a,b) {
    return a - b
  });
  
  for(let i = 0; i < newArr.length; i++) {
    if(newArr[i] === num) {
      console.log(newArr.indexOf(newArr[i]));
      return newArr.indexOf(newArr[i]));
    }
  }
}

getIndexToIns([40, 60], 50);
getIndexToIns([2, 20, 10], 19);
*/