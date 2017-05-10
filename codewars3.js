// QUESTION Break camelCase

function solution(string) {
  return string.replace(/[A-Z]/g," $&")
}

solution = (string) => string.replace(/[A-Z]/g," $&")

// other answers

function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));

}


// QUESTION Where's my anagrams at?

anagrams = (word, words) => {

  return words.filter(function(e){
    var anagrams = e.split('').sort().join('') 
    var testWord = word.split('').sort().join('')
    return anagrams === testWord
  })


}

// other answers 

function anagrams(word, words) {
  word = word.split('').sort().join('');
  return words.filter(function(v) {return word == v.split('').sort().join('');});
}

let anagrams = (word, words) => words.filter(w => w.split('').sort().join('') === word.split('').sort().join(''));