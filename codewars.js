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

//QUESTION Convert a Boolean to a String


booleanToString = (b) => b.toString()

// other answers

function booleanToString(b){
  return b ? 'true' : 'false';
}

// QUESTION Get the mean of an array

function getAverage(marks){
let nums = 0
  marks.map((e) => {
    nums += e
  })
  return Math.floor(nums / marks.length)
}

// other answers

function getAverage(marks){
  return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}

const getAverage = marks => Math.floor(marks.reduce((a, b) => a + b) / marks.length);

// QUESTION Grasshopper - Combine strings

combineNames = (first, last) =>  first + ' ' + last

// other answers

const combineNames = (...names) => names.join(' ');

const combineNames = (a, b) => `${a} ${b}`;

// QUESTION How good are you really?

betterThanAverage = (classPoints, yourPoints) => {
 let avg = 0
 let finalAvg = 0
 classPoints.map((e) => {
   avg += e
 })
 finalAvg = avg / classPoints.length
 if(finalAvg >= yourPoints) {
   return false
 } else {
   return true
 }
}


// other answers

function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}

function betterThanAverage(classPoints, yourPoints) {
  return classPoints.reduce((sum, x) => sum + x) < yourPoints * classPoints.length;
}

//QUESTION repeatIt

var repeatIt = function(str, n) {
if(typeof str === 'string') {
    return str.repeat(n)
    } 
    return 'Not a string'
  }

  // other answers

var repeatIt = function(str, n) {
  return typeof str === 'string' ? Array(n+1).join(str) : 'Not a string';
}

  //QUESTION Grasshopper - Array Mean

  var findAverage = function (nums) {
  let mean = 0
  nums.map((e) => {
    mean += e
  })
  return mean / nums.length
}

// QUESTION Regex count lowercase letters

lowercaseCount = (str)=> str.length - str.replace(/[a-z]/g, '').length

// other answers

function lowercaseCount(str){
    return (str.match(/[a-z]/g) || []).length
}

// QUESTION Grasshopper - Personalized Message

function greet (name, owner) {
 if(name === owner) {
   return 'Hello boss'
   } else {
     return 'Hello guest'
   }
}

// other answers

function greet (name, owner) {
  return name === owner ? 'Hello boss' :   'Hello guest';
}

function greet (name, owner) {
  return `Hello ${name==owner?'boss':'guest'}`
}

// QUESTION Find Multiples of a Number

function findMultiples(int,limit){
var nums = []
  for(var i = int; i <= limit; i++) {
    if(i % int === 0) {
      nums.push(i)
  }
}
  return nums
}


// other answers

function findMultiples(int,limit){
  let result = []
  
  for (let i = int; i<=limit ; i+=int)
    result.push(i)
    
  return result
}

const findMultiples=(n,l)=>Array.from({length:~~(l/n)},(a,i)=>i*n+n);

// QUESTION Printing Array elements with Comma delimiters

printArray = (array) => array.join(',')


// QUESTION Pre-FizzBuzz Workout #1

preFizz = (n) => {
  var array = [];
  for(var i = 0; i < n; i++){
   array.push(i + 1);
  }
  return array
}

// other answers

let preFizz = n => [...Array(n)].map((x, i) => i+1);

//QUESTION Add Length

addLength = (str) => {
 let result = []
 let strSplit = str.split(' ')
 for(let i = 0; i < strSplit.length; i++) {
   result.push(strSplit[i] + ' ' + strSplit[i].length)
   }
 return result
 
}

// other answers

function addLength(str){
  return str.split(' ').map(function(v){return v+' '+v.length})
}

function addLength(str){
  return str.split(" ").map(s => `${s} ${s.length}`)
}

//QUESTION Exclamation marks series #2: Remove all exclamation marks from the end of sentence

remove = (s) => s.replace(/!+$/, '') 

// QUESTION No zeros for heros

noBoringZeros = (n) => {
let m = n.toString()
  return Number(m.replace(/0+$/, ''))
}

// other answers

function noBoringZeros(n) {
  while(n%10==0 && n!=0){n/=10;}
  return n;
}

const noBoringZeros = n => parseInt(n.toString().replace(/0+$/g, "") + 0) / 10;

// QUESTION Correct the mistakes of the character recognition software

correct = (str) => {
  let strSplit = str.split('')
  for(var i = 0; i < strSplit.length; i++) {
    if(strSplit[i] === '0') {
        strSplit[i] = 'O';
      } else if(strSplit[i] === '5') {
      strSplit[i] = 'S';
      } else if(strSplit[i] === '1') {
      strSplit[i] = 'I';
      }
}
  return strSplit.join('')
}

// other answers

correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')

function correct(string) {
    return string.replace(/0/g, "O")
                 .replace(/5/g, "S")
                 .replace(/1/g, "I");
}

// QUESTION Complementary DNA

DNAStrand = (dna) => {
  let dnaSplit = dna.split('')
 for(let i = 0; i < dnaSplit.length; i++){
    if(dnaSplit[i] === 'A') {
       (dnaSplit[i] = 'T');
     } else if(dnaSplit[i] === 'C') {
       (dnaSplit[i] ='G') 
     } else if(dnaSplit[i] === 'G') {
       (dnaSplit[i] = 'C') 
     } else if(dnaSplit[i] === 'T') {
       (dnaSplit[i] = 'A')
     }
  }
return dnaSplit.join('')
}


// other answers

function DNAStrand(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}

function DNAStrand(dna) {
  return dna.split('').map(function(v) {return {A:'T', T:'A', C:'G', G:'C'}[v];}).join('');
}

// QUESTION Grasshopper - If/else syntax debug

function checkAlive (health) {
  if (health > 0) {
    return true
  } else {
    return false
  }
}

// other answers

function checkAlive(health) {
  return health > 0;
}

const checkAlive = (health) => health > 0

// QUESTION Squash the bugs

function findLongest(str) {
  
  var spl = str.split(" ");
  var longest = 0
  
  for (var i = 0; i < spl.length; i++) {
    if(spl[i].length > longest) {
      longest = spl[i].length
    }
    }
    return longest
}

// other answers

const findLongest = s => Math.max(...s.split(" ").map(x => x.length));

const findLongest = input => Math.max(...input.split(" ").map(i => i.length));

// QUESTION Generate HTML links

function generateMenu(menuItems) {
    var output = "";
  for (var i = 0; i < menuItems.length; i++){
    var anchor = "<a href=\"" + menuItems[i].url + "\">" + menuItems[i].text + "</a>";
    output += anchor;
  }
  return output;
}


//other answers

function generateMenu (menuItems) {
  return menuItems.map(function(e) {
    return '<a href=\"' + e.url + '\">' + e.text + '</a>';
  }).join('')
}

let generateMenu = arr => arr.reduce((c, v) => c += `<a href="${v.url}">${v.text}</a>`, '');

const generateMenu = menuItems =>
  menuItems.map(({url, text}) => `<a href="${ url }">${ text }</a>`).join('');

  //QUESTION Well of Ideas - Easy Version

  function well(x){
  var good = 0;
  var bad = 0;
  for(var i = 0; i < x.length; i++) {
    if(x[i] === 'good') {
      good++
    } else {
      bad++
      }
  }
  if(good === 1 || good === 2) {
    return 'Publish!'
  } else if( good > 2 ) {
    return 'I smell a series!'
  } else if( good === 0) {
    return 'Fail!'
  }
}

// other answers 

const well = x => {
  const good_count = x.filter(x => x == 'good').length;
  return good_count < 1 ? 'Fail!' : 
         good_count < 3 ? 'Publish!' : 'I smell a series!';
}

function well(x) {
  const count = x.reduce((s, v) => s + (v == 'good'), 0);
  return count ? count > 2 ? 'I smell a series!' : 'Publish!' : 'Fail!';
}

const well = x => {
let ideas = x.filter(y=>y==='good').length
  switch (true) {
    case ideas == 0: return 'Fail!'; break;
    case ideas < 3: return 'Publish!'; break;
    case ideas > 2: return 'I smell a series!'
  }

}

// QUESTION Word count

countWords = (str) => {
  var word = str.match(/[a-zA-Z0-9\-'`]+/g);
  return (str == '' || !word) ? 0 : word.length;
}

// other answers

function countWords(str) {
  return (str.match(/[^\s]+/g) || []).length;
}

function countWords(str) {
 return str.split(/\s/).filter(el => {
    return el;
  }).length; 
}

// QUESTION Lexical This

var Person = function(){
  var person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(f) { 
       person._friends = f
    }
  }
  return person;
}

// other answer

var Person = function(){
  var person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(f){
      this._friends.push(...f);
    }
  }
  return person;
}

// QUESTION A bugs trilogy: Episode 1 - "Let Math.Random(); decide your future"

yourFutureCareer = () => {
	var career = Math.random()
		if (career <= 0.32) {
			return 'FrontEnd Developer'
		 } else if (career <= 0.65) {
			return 'BackEnd Developer'
		} else {
			return 'Full-Stack Developer'
		}
}

yourFutureCareer();

// other answers

const yourFutureCareer = () => {
  let career = Math.random();
  return `${ career <= 0.32 ? 'FrontEnd' : (career <= 0.65 ? 'BackEnd' : 'Full-Stack') } Developer`;
}

// QUESTION Find variable which breaks strict comparison!

function findStrangeValue() {
   return NaN;
}

// other answers 


const findStrangeValue = () => NaN;

// QUESTION Crash Override


function aliasGen(first, last){
   var firstArr = first.split('')[0].toUpperCase()
   var lastArr = last.split('')[0].toUpperCase()
   var fullName = []
   if(!Number(firstArr) && !Number(lastArr)) {
       fullName.push(firstName[firstArr]) 
       fullName.push(surname[lastArr])
   } else {
       fullName.push('Your name must start with a letter from A - Z.')
   }
  return fullName.join(' ')
}

// other answers 

const initialCap = (str) => str[0].toUpperCase();
const isValidName = (name) => /^[a-z]/i.test(name);
const aliasGen = (fName, lName) => {
  return (isValidName(fName) && isValidName(lName))
    ? `${ firstName[initialCap(fName)] } ${ surname[initialCap(lName)] }`
    : 'Your name must start with a letter from A - Z.';
}

function aliasGen(a, b) {
  return /^[a-z]/i.test(a) && /^[a-z]/i.test(b) ? `${firstName[a[0].toUpperCase()]} ${surname[b[0].toUpperCase()]}` : "Your name must start with a letter from A - Z.";  
}

// QUESTION Find the Difference in Age between Oldest and Youngest Family Members

function differenceInAges(ages){
  var sorted = ages.sort(function(a, b) {
    return a - b;
  })
  var results = []
  var last = sorted.pop()
  var total = last - sorted[0]
  results.push(sorted[0])
  results.push(last)
  results.push(total)
  return results
}

// other answers 

function differenceInAges (ages) {

    let max = Math.max(...ages),
        min = Math.min(...ages)
        diff = max - min
        
    return [min, max, diff]
}

const differenceInAges = (ages) => {
  let youngest = Math.min.apply(null, ages);
  let oldest = Math.max.apply(null, ages);
  return [youngest, oldest, oldest - youngest];
};

// QUESTION Abbreviate a Two Word Name

function abbrevName(name){
  var arr = name.toUpperCase().split(' ')
  var names = []
  names.push(arr[0][0])
  names.push(arr[1][0])
  return names.join('.')
}

// other answers 

function abbrevName(name){

  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

function abbrevName(name){
  return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
}

// QUESTION Find the smallest integer in the array

class SmallestIntegerFinder {
  findSmallestInt(args) {
    var result = args.sort(function(a, b) {
      return a - b
    })
    return result[0]
  }
}

// other answers

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min.apply(Math, args)
  }
}

//  QUESTION Sum of two lowest positive integers

sumTwoSmallestNumbers = (numbers) => {  
  var sorted = numbers.sort(function(a, b) {
      return a - b
    })
    return sorted[0] + sorted[1]
};

// other answers 

function sumTwoSmallestNumbers(numbers){  
  numbers = numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
};

// QUESTION Building Strings From a Hash

solution = (pairs) => {
return Object.keys(pairs)
    .map(function(e) { return e + ' = ' + pairs[e] })
    .join(',');
}

// other answers 

function solution(pairs){
  var array = [];
  for (var pair in pairs){
    array.push((pair+' = '+pairs[pair]));
  }
  return array.join(',');
}

function solution(pairs) {
  return Object.keys(pairs).map(k => `${k} = ${pairs[k]}`).join(",");
}

// QUESTION Remove the minimum

function removeSmallest(numbers) {
  if(numbers.length < 1) {
    return []
  } else {
    var min = Math.min(...numbers);
    for(var i = 0; i < numbers.length; i++) {
      if(numbers[i] === min) {
        numbers.splice(i ,1)
        return numbers
      }
    }
  }
}

// other answers 

function removeSmallest(numbers) {
  if(!numbers)return [];
  var min=Math.min.apply(null,numbers);
  numbers.splice(numbers.indexOf(min),1);
  return numbers;
}

function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}

function removeSmallest(numbers) {
  numbers.splice(numbers.indexOf(Math.min(...numbers)), 1);
  return numbers;
}

//  QUESTION Sort the Gift Code

sortGiftCode = (code) => code.split('').sort().join('')

// other answers

const sortGiftCode = code => code.split('').sort().join('');

function sortGiftCode(code){
  return code.substring(0,26).split('').sort().join('');
}

// QUESTION The highest profit wins!

minMax = (arr) => {
let final = []
  final.push(Math.min( ...arr ))
  final.push(Math.max( ...arr ))
return final  
}

// other answers 

function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
}

function minMax(arr){
  return [Math.min.apply(Math, arr), Math.max.apply(Math, arr)];
}

// QUESTION Sort Numbers

solution = (nums) => {
  if(nums == null)  {
    return []
  } else {
    return nums.sort((a,b) => {
      return a - b
    })
  }
}

// other answers 

function solution(nums){
  return (nums || []).sort(function(a, b){
    return a - b
  });
}

function solution(nums){
    return nums !== null ? nums.sort(function(a,b){return a-b}) : [];
}

// QUESTION Sort arrays - 1

sortme = function( names ){
  return names.sort()
}

// other answers 

sortme = Array.sort;

sortme = a => a.sort();


// QUESTION Find the capitals

var capitals = function (word) {
var arr = []
	for(let i = 0; i < word.length; i++) {
    if(word[i] === word[i].toUpperCase()){
      arr.push(i)
    }
  }
  
  return arr
};

// other answers 

var capitals = function (word) {
  return word.split('').reduce(function(memo, v, i) {
    return v === v.toUpperCase() ? memo.concat(i) : memo;
  }, []);
};

var capitals = function (word) {
  for (var pos = [], i = 0, len = word.length; i < len;/[A-Z]/.test(word[i++]) ? pos.push(i-1) : null);
  return pos;
};

// QUESTION Friend or Foe?

friend = (friends) => {
  var list = friends.filter((e) => {
     return e.length === 4
  })
  return list
}

// other answers 

function friend(friends){
  return friends.filter(n => n.length === 4)
}

const friend = friends => friends.filter(friend => friend.length == 4);

// QUESTION JavaScript Array Filter

getEvenNumbers = (numbersArray) => {
   return numbersArray.filter(n => n % 2 === 0)
}

// other answers 

function getEvenNumbers(numbersArray){
  return numbersArray.filter(function(num){return !(num % 2) })  
}

function getEvenNumbers(numbersArray){
  return numbersArray.filter(function(x) {
      return x % 2 == 0;
  })
} 

// QUESTION Sort Numbers

function solution(nums){
  var arr = []
  if(nums == null || nums == []) {
    return arr
  } else {
    return nums.sort(function(a, b) {
      return a - b
    })
  }

}

// other answers 

function solution(nums){
  return (nums || []).sort(function(a, b){
    return a - b
  });
}

function solution(nums){
    return nums !== null ? nums.sort(function(a,b){return a-b}) : [];
}

function solution(nums){
  return nums ? nums.sort(function(a, b) { return a - b;}) : [];
}

// QUESTION Greet Me

var greet = function(name) {
var arr = ['Hello ']
var name = name.toLowerCase()
var cap = name[0].toUpperCase() + name.slice(1);
arr.push(cap)
arr.push('!')
return arr.join('')

};

// other answers 

var greet = function(name) {
  return "Hello " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!";
};

var greet = function(name) {
  return 'Hello ' + name[0].toUpperCase() + name.slice(1).toLowerCase() + '!';
};

var greet = function(name) {
name = name.toLowerCase();
name= name.split('');
name[0] = name[0].toUpperCase();
name = name.join('');
return "Hello " + name +"!";
};

// QUESTION Palindrome

var isPalindrome = function(word) {
if(word) {
    var forwards = word.toLowerCase()
    var backwards = word.toLowerCase()
    backwards = backwards.split('').reverse().join('')
  
  return (forwards === backwards ) ? true: false;
  
  } 
  return false
};  

// QUESTION