//Convert Celsius to Fahrenheit
//COMPLETED
/*
function convertToF(celsius) {
  let fahrenheit = celsius * (9/5) + 32;
  console.log(fahrenheit);
  return fahrenheit;
}
  
convertToF(0);
*/


//Reverse a String
//COMPLETED
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
//COMPLETED
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
//COMPLETED
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
}
  
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
*/




//Confirm the Ending
//COMPLETED
/*
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
//COMPLETED
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
//COMPLETED
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
/*
function findElement(arr, func) {
  let num = 0;
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
*/




//Boo Who
/*
function booWho(bool) {
  if(typeof bool === 'number') {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}
  
booWho(null);
booWho(true);
booWho(false);
booWho([1, 2, 3]);
booWho([].slice);
booWho({ "a": 1 });
booWho(1);
booWho(NaN);
booWho("a");
booWho("true");
booWho("false");
*/




//Title Case a Sentence
//COMPLETED
/*
function titleCase(str) {
  let lower = str;
  for(let i = 0; i < str.length; i ++) {
    lower = str.toLowerCase();
  }
  
  let a = lower.split(' ');
  let result = '';
  for(let i = 0; i < a.length; i++) {
   result = result + ' ' + (a[i].substring(0).charAt(0).toUpperCase() + a[i].substring(1));
  }

  console.log(result.substring(1));
  return result.substring(1);
}

titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
*/




//Slice and Splice
//COMPLETED
/*
function frankenSplice(arr1, arr2, n) {
  let l = arr1.length;
  let g = arr1.slice(0, l);
  let r = g.reverse();
  let l2 = arr2.length;
  let g2 = arr2.slice(0, l2);
  
  let i;
  for(i = 0; i < l; i++) {
    g2.splice(n, 0, g[i]);
  }

 console.log(g2);
 return g2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
frankenSplice([1, 2], ["a", "b"], 1);
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);
*/





//Falsy Bouncer
/*
function bouncer(arr) {
  let i;
  for(i = 0; i < arr.length; i++) {
    if(arr[i] !== false && arr[i] !== null && arr[i] !== undefined && arr[i] !== NaN && arr[i] !== 0 && arr[i] !== ''){
      console.log(arr[i]);
    } 
  }
}

bouncer([7, "ate", "", false, 9]);
console.log('/////');
bouncer(["a", "b", "c"]);
console.log('/////');
bouncer([false, null, 0, NaN, undefined, ""]);
console.log('/////');
bouncer([1, null, NaN, 2, undefined]);
*/





//Where Do I Belong
//COMPLETED
/*
function getIndexToIns(arr, num) {
  arr.push(num);
  let newArr = arr.sort(function(a,b) {
    return a - b;
  });

  for(let i = 0; i < newArr.length; i++) {
    if(newArr[i] === num) {
      console.log(newArr.indexOf(newArr[i]));
      return newArr.indexOf(newArr[i]);
    }
  }
}

getIndexToIns([10, 20, 30, 40, 50], 35);
*/



//Mutations
//COMPLETED
/*
function mutation(arr) {
  let copyOne = [];
  copyOne.push(arr[0]);
  //console.log(copyOne);
  let newCopyOne = copyOne.toString();
  //console.log(newCopyOne);
  let newCopyOne2 = newCopyOne.toLowerCase();
  let newArrOne = newCopyOne2.split('');
  //console.log(newArrOne);
  //let sortedOne = newArrOne.sort();
  //console.log(sortedOne); 

  let copyTwo = [];
  copyTwo.push(arr[1]);
  //console.log(copyTwo);
  let newCopyTwo = copyTwo.toString();
  let newCopyTwo2 = newCopyTwo.toLowerCase();
  //console.log(newCopyTwo);
  let newArrTwo = newCopyTwo2.split('');
  //console.log(newArrTwo);
  //let sortedTwo = newArrTwo.sort();

  //console.log(sortedOne);
  //console.log(sortedTwo);
  let notTrue;
  for(let i = 0; i < newArrTwo.length; i ++) {
    if(newArrOne.includes(newArrTwo[i])) {
      console.log('true so far');
    } else {
      notTrue = 0;;
    }
  }
  if(notTrue === 0) {
    console.log('false');
    return false;
  } else {
    console.log('true');
    return true;
  }
}

mutation(["hello", "hey"]);
//mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
*/





//Chunky Monkey
/*
function chunkArrayInGroups(arr, size) {
  let arrTwo = arr.slice(0,size);
  let arrThree = arr.slice(size, (size + size));
  let result = [arrTwo,arrThree];
  console.log(result);
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
*/
