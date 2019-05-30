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
    
function reverseString(str) {
    const arr = str.split('');
    const arr2 = arr.reverse();
    str = arr2.join('');
    return str;
}
  
  
console.log(reverseString("hello"));
console.log(reverseString("Howdy"));
console.log(reverseString("Greetings from Earth"));