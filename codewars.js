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

// QUESTION 