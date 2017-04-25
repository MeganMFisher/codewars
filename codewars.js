//If true return 'Yes' if false return 'No'

function boolToWord(bool) {
  if(bool === true) {
    return 'Yes';
  } else {
    return 'No';
  }
}

//Other answers

function boolToWord( bool ){
  return bool ? 'Yes':'No';
}

function boolToWord( bool ){
  if (bool) {
    return 'Yes';
  } else {
    return 'No';
  }
}

let boolToWord = bool => bool ? 'Yes' : 'No';

// QUESTION: Invert numbers in array

function invert(array) {
var arr = [];
  for(var i = 0; i < array.length; i++) {
    if(array[i] !== 0) {
    arr.push(array[i] * -1)
    } else {
      arr.push(array[i])
    }
   }
   return arr
}

// other solutions

function invert(array) {
   return array.map( x => x === 0 ? x : -x);
}

function invert(array) {
   return array.map(n => n && -n)
}

function invert(array) {
   return array.map(v => ~v+1);
}

// QUESTION find average of number in array



// other solutions

function find_average(array) {
  var sum = array.reduce((a, b) => a + b, 0);
  return sum/array.length;
}

function find_average(array) {
  return array.reduce((result, current) => result + current, 0) / array.length;
}

function find_average(array) {
  return array.reduce((a, b) => (a + b)) / array.length;
}

// QUESTION 

