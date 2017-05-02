// QUESTION disemvowel Trolls

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '')
}

// other answers

function disemvowel(str) {
  return (str || "").replace(/[aeiou]/gi, "");
}

disemvowel = str => str.replace(/[aeiou]/gi,'');

// QUESTION 

