// QUESTION disemvowel Trolls

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '')
}

// other answers

function disemvowel(str) {
  return (str || "").replace(/[aeiou]/gi, "");
}

disemvowel = str => str.replace(/[aeiou]/gi,'');

// QUESTION you're a square

var isSquare = function(n){
  return n >= 0 && Math.sqrt(n) % 1 === 0;
}

function disemvowel(str) {
  var result = '';
  
  for(var i = 0; i < str.length; i++) {
    var test = str.charAt(i).toLowerCase();
    if (test !== 'a' && test !== 'e' && test !== 'i' && test !== 'o' && test !== 'u') {
      result = result + str.charAt(i);
    }
  }
  
  return result;
}

// other answers

function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

const isSquare = n => Number.isInteger(Math.sqrt(n));

var isSquare = function(n){
  return Number.isInteger(Math.sqrt(n));
}

// QUESTION Jaden Casing Strings

String.prototype.toJadenCase = function () {
 return this.replace(/(^|\s)[a-z]/g,function(f){return f.toUpperCase();})
};

// other answers 

String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}

String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
};

String.prototype.toJadenCase = function () {

  function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  return this.split(' ').map(capitalizeFirstLetter).join(' ');
};

// QUESTION Get the Middle Character

function getMiddle(s) {
  return s.length % 2 ? s.substr(s.length / 2, 1) : s.substr((s.length / 2) - 1, 2);
}

// other answers

function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

function getMiddle(s) {
  var middle = s.length / 2;
  return (s.length % 2) 
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);
}

const getMiddle = s => s.substr(s.length - 1 >>> 1, (~s.length & 1) + 1);

// QUESTION Descending Order

function descendingOrder(n){
  let a = n.toString().split('')
  let b = a.sort(function(a, b){return b-a}).join('')
  return (b / 1)
}

// other answers

function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}

function descendingOrder(n){
  return +(n + '').split('').sort(function(a,b){ return b - a }).join('');
}

function descendingOrder(n){
  return parseInt(n.toString().split('').sort().reverse().join(''), 10);
}

// QUESTION Square Every Digit

function squareDigits(num){
  let a = num.toString()
  let b = []
  
  for(var i = 0; i < a.length; i++) {
    b[i] = a[i] * a[i]
  }
  return Number(b.join(''))
}

// other answers

function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join('')); 
}

function squareDigits(num){
  var array = num.toString().split('').map( function(int) {
    var i = parseInt(int);
    return i * i;
  });
  
  return parseInt(array.join(""));
}

function squareDigits(num){
    var string = num.toString();
    var results = [];
    for (var i = 0; i < string.length; i++){
        results[i] = string[i] * string[i];
    }
    return Number(results.join(''));
};

// QUESTION Array.diff

function array_diff(a, b) {
  var diff = []
  for(var i = 0; i < a.length; i++) {
  if(a[i] != b) {
    diff.push(a[i])
    }
  }
  return diff
}

// other answers

function array_diff(a, b) {
  return a.filter(function(x) { return b.indexOf(x) == -1; });
}

function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}

function array_diff(a, b) {
  return a.filter(function (v) { return b.indexOf(v) === -1 });
}

// QUESTION Dubstep

function songDecoder(song){
  var a = song.replace(/WUB/g,' ');
  var b = a.replace(/\s+/g, ' ')
  return b.trim()
}

// other answers 

function songDecoder(song){
  return song.replace(/(WUB)+/g," ").trim()
}

function songDecoder(song){
  return song.split('WUB').filter(Boolean).join(' ');
}

var songDecoder = (song) => song.split('WUB').filter(x => x !== '').join(' ')

// QUESTION Duplicate Encoder

function duplicateEncode(word){
  return word.toLowerCase().split('').map( function (a, b, c) {
      return c.indexOf(a) == c.lastIndexOf(a) ? '(' : ')'
    }).join('');
}

// other answers

function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}

function duplicateEncode(word) {
  var letters = word.toLowerCase().split('')
  return letters.map(function(c, i) {
    return letters.some(function(x, j) { return x === c && i !== j }) ? ')' : '('
  }).join('')
}

// QUESTION Simple Pig Latin

function pigIt(str){
  return str.replace(/\b(\w)(\w+)/g,function(a,b,c){return c+b+"ay";});
}

// other answers

function pigIt(str){
  return str.split(' ').map(function(el){
    return el.slice(1) + el.slice(0,1) + 'ay';
  }).join(' ');
}

function pigIt(str){
  return str.replace(/\b(\w)(\w+)\b/ig,"$2$1ay");
}

function pigIt(str){
  var words = str.split(" ");
  for (w in words) {
    words[w] = words[w].slice(1) + words[w].slice(0,1) + "ay"
  }
  return words.join(" ");
}

// QUESTION convert string to camel case

toCamelCase = (str) => {
  camel = str.split('');
  return camel.map(function(e, i){
    if(e == '-' || e == '_'){
      e = camel[i+1].toUpperCase();
      camel.splice(i+1, 1);
    }
    return e;
  }).join('');
}


// other answers

function toCamelCase(str){
      var regExp=/[-_]\w/ig;
      return str.replace(regExp,function(match){
            return match.charAt(1).toUpperCase();
       });
}

function toCamelCase(str){
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}


// QUESTION direction reduction

dirReduc = (arr) => {
  var i = 0;    
  while(i < arr.length) {
    if((arr[i] === "NORTH" && arr[i+1] === "SOUTH") ||
    (arr[i] === "SOUTH" && arr[i+1] === "NORTH") ||
    (arr[i] === "EAST" && arr[i+1] === "WEST") ||
    (arr[i] === "WEST" && arr[i+1] === "EAST")) {
        arr.splice(i, 2);
        i--;
    } else {
      i++;
    }
  }
  return arr;
}

// other answers

function dirReduc(plan) {
  var opposite = {
    'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
  return plan.reduce(function(dirs, dir){
      if (dirs[dirs.length - 1] === opposite[dir])
        dirs.pop();
      else
        dirs.push(dir);
      return dirs;
    }, []);
}

function dirReduc(arr) {
  var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
  while (pattern.test(str)) str = str.replace(pattern,'');
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[];
}

function isOppo(dir1,dir2) {
    if (dir1 + dir2 === 'SOUTHNORTH') return true;
    if (dir1 + dir2 === 'NORTHSOUTH') return true;
    if (dir1 + dir2 === 'EASTWEST') return true;
    if (dir1 + dir2 === 'WESTEAST') return true;
    return false;
}
  
function dirReduc(arr){
  var len = arr.length
  for (var i = 0; i < len - 1; i++) {
    if (isOppo(arr[i], arr[i+1])) {
      arr.splice(i,2);
      return dirReduc(arr);
    }
  }
  return arr;
}

// QUESTION Your order, please

order = (words) => {
  return words.split(' ').sort(( a, b ) => {
      var num1 = +(a.match(/\d+/g)[0]);
      var num2 = +(b.match(/\d+/g)[0]);
      return num1 - num2;
    }).join(' ');
}

// other answers

function order(words){
  
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}  

function order(words){
  var array = words.split(' ');
  var sortedArray = [];
  for(i = 0; i <= array.length; i++) {
    for(j = 0; j < array.length; j++) {
      if(array[j].indexOf(i) >= 0) {
        sortedArray.push(array[j]);
      }
    }
  }
  return sortedArray.join(' ');
}

// QUESTION Replace with alphabet position

function alphabetPosition(text) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz'
  let split = text.toLowerCase().split('')
  let final = []
  for(let i = 0; i < split.length; i++) {
    split[i] = alpha.indexOf(split[i]) + 1
     if(split[i] !== 0) {
       final.push(split[i])
     }
  }
  return final.toString().replace(/,/g, " ");
}

// other answers

function alphabetPosition(text) {
  var result = "";
  for (var i = 0; i < text.length; i++){
    var code = text.toUpperCase().charCodeAt(i)
    if (code > 64 && code < 91) result += (code - 64) + " ";
  }

  return result.slice(0, result.length-1);
}

function alphabetPosition(text) {
  return text.match(/[a-zA-Z]/g).map( (el) => el.toLowerCase().charCodeAt() - 96 ).join(' ');
}

let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');

// QUESTION  no oddities here

noOdds = ( values ) => {
  let evens = []
  values.map(function(e){
    if(e % 2 === 0) {
    evens.push(e)
    }
  })
  return evens
}

BombKey
diffuseTheBomb
3.14..
new Date()




// other answers

function no_odds( values ){
  return values.filter(function(item) {
    return item % 2 == 0  
  });
}

var noOdds = values => values.filter(x => x % 2 === 0);

// QUESTION Reversed strings

solution = (str) => str.split('').reverse('').join('')

// other answers

let solution = str => [...str].reverse().join('');

function solution(str){
  return str.length > 0 ? solution(str.substring(1)) + str.charAt(0) : '';
}

// QUESTION counting duplicates

duplicateCount = (string) => {
 let arr = []
  string.toLowerCase().split('').filter((e, i, array) => {
    if(array.indexOf(e) !== i && arr.indexOf(e) === -1) arr.push(e)
  })
  return arr.length
}

// other answers 

function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}


function duplicateCount(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}

function duplicateCount(text){
  return new Set(text.toLowerCase().match(/(.)(?=.*\1)/gi)).size
}

// QUESTION Hit Count

function counterEffect(str) {
  var splitStr = str.split('');
  console.log(splitStr);
  var newArr = [];
  for (var i = 0; i < splitStr.length; i++) {
    newArr.push([])
    for(var j = 0; j <= splitStr[i]; j++) {
      newArr[i].push(j);
    }
  }
  return newArr;
}

// other answers 

function counterEffect(hitCount) {
  return [...hitCount].map( d => Array.from({length:+d+1}, (_,i) => i) )
}

function counterEffect(hitCount) {
   return hitCount.split('').map(function(x){
     return '0123456789'.substring(0, +x +1).split('').map(y => +y);
   });
}

function counterEffect(count) {
  let arr = [], i;
  for (i = 0; i < count.length; i++)  
    arr.push([...Array.from({length: +count[i] + 1}).keys()]);
  return arr;
}

// QUESTION 






