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

// QUESTION 








