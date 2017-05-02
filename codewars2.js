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

// QUESTION 



