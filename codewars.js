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

function find_average(array) {
  let sum = 0;
  for(var i = 0; i < array.length; i++) {
    sum += parseInt(array[i])
  }
  return sum / array.length;
}

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

// QUESTION Number of People in the Bus

var number = function(busStops){
  var peeps = 0;
  for(var i = 0; i < busStops.length; i++) {
   peeps += busStops[i][0] 
   peeps -= busStops[i][1]
  }
  return peeps
}

// other solutions

const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

var number = function(busStops){
  return busStops.map(x => x[0] - x[1]).reduce( (x, y) => x + y);
}

const number = busStops => busStops.reduce((n, [on, off]) => n + on - off, 0);

// QUESTION Rock Paper Scissors

const rps = (p1, p2) => {
 const getMsg = (n) => `Player ${n} won!`;

  if(p1 === 'rock' && p2 === 'scissors') {
      return getMsg(1)
  } else if(p1 === 'scissors' && p2 === 'paper') {
      return getMsg(1)
  } else if(p1 === 'paper' && p2 === 'rock') {
      return getMsg(1)
  } else if(p2 === 'rock' && p1 === 'scissors') {
      return getMsg(2)
  } else if(p2 === 'scissors' && p1 === 'paper') {
      return getMsg(2)
  } else if(p2 === 'paper' && p1 === 'rock') {
      return getMsg(2)
  } else if(p1 === 'rock' && p2 === 'rock') {
      return 'Draw!'
  } else if(p2 === 'scissors' && p1 === 'scissors') {
      return 'Draw!'
  } else if(p2 === 'paper' && p1 === 'paper') {
      return 'Draw!'
    }
};

// other solutions

const rps = (p1, p2) => {
  if(p1 === p2) {
    return 'Draw!'
  }; 
  return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;
}

const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  }
  else {
    return "Player 2 won!";
  }
};

const rps = (p1, p2) => {
  if (p1 == p2)
    return 'Draw!';
    
   if (p1 == 'rock' && p2 == 'scissors') 
     return 'Player 1 won!'
   else if (p1 == 'scissors' && p2 == 'paper') 
     return 'Player 1 won!'
   else if (p1 == 'paper' && p2 == 'rock') 
     return 'Player 1 won!'
   else
     return 'Player 2 won!';
};

// QUESTION Last

function last(list){ 
console.log(list)
if(list.length > 2) {
  var arr = list.slice(-1);
  return arr[arr.length-1];
  } else {
  var arg = Array.prototype.slice.call(arguments);
   return arg[arg.length-1]
   } 
}

// other solutions

function last(list){
  var last = arguments[arguments.length - 1];
  return last[last.length - 1] || last;
}

function last(list) {
  if (arguments.length > 1) {
    return arguments[arguments.length - 1];
  }
  if (Array.isArray(list)) {
    return list.pop();
  } else if (typeof list == 'string') {
    return list.charAt(list.length - 1)
  } else {
    return list;
  }
}

function last(list){
  return arguments.length > 1 
    || !(list instanceof String || typeof(list) == 'string' || list instanceof Array) 
      ? arguments[arguments.length - 1] 
      : list[list.length - 1];
}

// QUESTION the four seasons

function fourSeasons(d){
  if(d >= 81 && d <= 172){
    return 'Spring Season'
  }else if(d >= 173 && d <= 264){
    return 'Summer Season'
  }else if(d >= 265 && d <= 355){
    return 'Autumn Season'
  }else if(d >= 355 && d <= 365 || d <= 81){
    return 'Winter Season'
  } else {
    return 'The year flew by!'
  }
}

// other answers

function fourSeasons(d){
switch (true) {
case (d <= 79 || d >= 355 && d <= 365) :
return 'Winter Season';
break;
case (d >= 80 && d <= 171) :
return 'Spring Season';
break;
case (d >= 172 && d <= 263) :
return 'Summer Season';
break;
case (d >= 264 && d <= 354) :
return 'Autumn Season';
break;
default:
return 'The year flew by!';
}
}

// QUESTION most digits

function findLongest(array){
 var nums = 0
  for(var i = 0; i < array.length; i++){
     if(array[i].toString().length > nums.toString().length){
       nums = array[i]
     }
  }
  return nums
}

// other answers

function findLongest(a) {
  let m = Math.max(...a);
  for (let i = 0; i < a.length; i++) if (m.toString().length == a[i].toString().length ) return a[i];
}

function findLongest(array){
  return array.reduce((res, curr) => (String(res).length < String(curr).length) ? curr : res);
}

function findLongest(a) {
  return a[a.map(n => ~~Math.log10(n)).indexOf(Math.max(...a.map(n => ~~Math.log10(n))))];
}

// QUESTION vowel count

function getCount(str) {
  var vowelsCount = 0;
  var string = str.split('')
  for(var i = 0; i < string.length; i++){
   if('aeiou'.indexOf(string[i]) != -1) {
      vowelsCount++
    }
  }
  return vowelsCount;
}

// other answers

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

function getCount(str) {
  var vowelsCount = 0;
  vowelsCount = str.match(/[aeiou]/gi);
  return vowelsCount ? vowelsCount.length:0;
}

const getCount = str => str.replace(/[^aeiou]/g, '').length;

// QUESTION mumbling

function accum(s) {
	let letters = s.toLowerCase().split('')
  for(let i = 0; i < letters.length; i++) {
    letters[i] = letters[i].toUpperCase() + letters[i].repeat(i)
  }
  return letters.join('-')
}

// other answers

function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

function accum(s) {
  return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
}

function accum(str) {
  var letters = str.split('');
  var result = [];
  for (var i = 0; i < letters.length; i++) {
    result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
  }
  return result.join('-');
}

// QUESTION is your period late?


periodIsLate = (last, today, cycleLength) => {
  let days =  Math.floor(( today - last ) / 86400000) 
  if(days > cycleLength) {
      return true
  } else {
      return false;
  }
}

// other answers

function periodIsLate(last, today, cycleLength)
{
  return (today-last)/86400000>cycleLength
}

periodIsLate = (last, today, cycleLength) => (last.getTime() + cycleLength * 86400000) < today

// QUESTION my head is at the wrong end

fixTheMeerkat = (arr) => arr.reverse()

// other answers

function fixTheMeerkat(arr) {
  return arr.reverse();
}

// QUESTION convert number to a string

function numberToString(num) {
  return num.toString()
}

// other answer

function numberToString(num) {
  return String(num);
}

// QUESTION are you playing banjo?

areYouPlayingBanjo = (name) => {
  if(name.toLowerCase().charAt(0) == 'r') {
    name = name + ' plays banjo';
  } else {
    name = name + ' does not play banjo';
  }
  return name
}

// other answers

function areYouPlayingBanjo(name) {
  return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}

function areYouPlayingBanjo(name) {
  if (name[0].toLowerCase() === 'r') {
    return name + ' plays banjo';
  } else {
    return name + ' does not play banjo';
  }
}

// QUESTION double Char

doubleChar = (str) => {
  var a = str.split('')
  var b = []
  console.log(a)
  for(var i = 0; i < a.length; i++) {
    b.push(a[i].repeat(2))
    console.log(b)
  }
  return b.join('')
}

// other answers

const doubleChar = (str) => str.split("").map(c => c + c).join("");

function doubleChar(str) {
  return str.replace(/(.)/g, "$1$1")
}

function doubleChar(str) {
  var word = '';
  for (var i = 0; i < str.length; i++){
    word = word + str[i] + str[i];
  };
  return word;
};

// QUESTION Sum Arrays

sum = (numbers) => {
   let sum = 0
   for(let i = 0; i < numbers.length; i++) {
    if(numbers.length > 0) {
     sum += numbers[i]
   } else {
     sum = 0
   }
   }
   console.log(sum)
  return sum
}

// other answer 

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

sum = function (numbers) {
    "use strict";
    return numbers.reduce(function(prev, cur) { return prev + cur }, 0);
};

// QUESTION count by X

countBy = (x, n) => {
 var arr = [];
  for(let i = 1; i < n+1; i++){
      arr[i] = i * x
  }
   return arr.slice(1, arr.length);
}

// other answer

function countBy(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}

const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)

function countBy(x, n){
  return Array.apply(0, Array(n)).map(function(v, i){
    return (i + 1) * x;
  });
}

// QUESTION count of positives / sum of negatives

 countPositivesSumNegatives = (input) => {
 console.log(input)
  if(input === null || input.length < 1) {
    return []
  }
  var arr = [0, 0]
    for(let i = 0; i < input.length; i++) {
      if(input[i] > 0){
        arr[0] += 1
      } else {
        arr[1] += input[i]
      }
    }
      return arr
}

// other answers

function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}

function countPositivesSumNegatives(input) {
  if (!Array.isArray(input) || !input.length) return [];
  return input.reduce((arr, n) => {
    if (n > 0) arr[0]++;
    if (n < 0) arr[1] += n;
    return arr;
  }, [0, 0]);
}

// QUESTION sum without highest and lowest number

sumArray = (array) => {
  if(array) {
    var arr = 0
    array.sort(function(a, b){return a - b}).pop()
    array.shift()
        for(var i  = 0; i < array.length; i++){
            arr += array[i]
        } 
  } else {
    arr = 0
  }
return arr
}

// other answers

sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0

function sumArray(array) {
  return Array.isArray(array) && array.length > 1
    ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
    : 0
}

// QUESTION count the monkeys

monkeyCount = (n) => {
  var monkeys = []
  for (var i = 0; i < n; i++) {
         monkeys[i] = i + 1; 
       }

   return monkeys;
}

// other answers

function monkeyCount(n) {
 var monkeys = [];
 for(var i=1; i<n+1; i++){
   monkeys.push(i);
 }
 return monkeys;
}

function monkeyCount(n) {
  for (var i = 0, arr = []; i < n; arr.push(++i));
  
  return arr;
}

function monkeyCount(n) {
  return Array.from({length:n}, (_,i)=>i+1)
}

// QUESTION vowel remover

shortcut = (string) => string.replace(/[aeiou]/gi, '')

// other answers

function shortcut(str) {
  return str.split('').filter(function(e) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1 
  }).join('')
}

const shortcut = string => string.replace( /[euioa]/g, '' );

// QUESTION grasshopper grade book

function getGrade (s1, s2, s3) {
  var mean = (s1 + s2 + s3) / 3
  if(mean >= 90) {
    return 'A'
  } else if(mean >= 80 && mean < 90) {
    return 'B'
  } else if(mean >= 70 && mean < 80) {
    return 'C'
  } else if(mean >= 60 && mean < 70) {
    return 'D'
  } else {
    return 'F'
  }
}
// other answers

function getGrade (s1, s2, s3) {
  avg = (s1+s2+s3)/3;
  if (avg < 60)  return "F";
    else if (avg < 70) return "D";
    else if (avg < 80) return "C";
    else if (avg < 90) return "B";
    else return "A";
}

function getGrade (s1, s2, s3) {
  var s = (s1 + s2 + s3) / 3
  return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
}

// QUESTION Formatting decimal places #0

twoDecimalPlaces = (n) => Math.round(n*100)/100;

// other answers

const twoDecimalPlaces = n =>  Number(n.toFixed(2))

const twoDecimalPlaces = n => +n.toFixed(2)

// QUESTION Fake Binary

fakeBin = (x) => {
  var a = x.replace(/[0-4]/g, "0")
  return a.replace(/[5-9]/g, "1")
}

// other answers

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

function fakeBin(x) {
  return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}

function fakeBin(x){
  return x.replace(/[1234]/g, '0').replace(/[56789]/g, '1')
}

// QUESTION Exclusive "or" (xor) Logical Operator

xor = (a, b) => {
  if(a && !b || !a && b) {
    return true
  }
  return false
}

// other answers

function xor(a, b) {
  return a != b;
}

function xor(a, b) {
  return (a || b) && !(a && b);
}

const xor=(a, b)=>a!=b;

// QUESTION welcome to the city

sayHello = ( name, city, state ) => {
if(name[2]) {
  return 'Hello, ' + name[0] + ' ' + name[1] + ' ' + name[2] +'!' + ' Welcome to ' + city  + ', ' + state + '!' 
} else {
  return 'Hello, ' + name[0] + ' ' + name [1] + '!' + ' Welcome to ' + city  + ', ' + state + '!' 
}
}

// other answers

function sayHello( name, city, state ) {
return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}

function sayHello( name, city, state ) {
  return 'Hello, ' + name.join(' ') + '! Welcome to ' + city + ', ' + state + '!';
}

var sayHello = (n, c, s) => `Hello, ${n.join(' ')}! Welcome to ${c}, ${s}!`;

// QUESTION is it even?

testEven = (n) => n % 2 === 0

// other answers 

function testEven(n) {
    return n%2===0;
}

function testEven(n){
  return !(n % 2);
}

function testEven(n) {
  return n % 2 === 0 ? true : false;
}

var testEven = x => !(x % 2)