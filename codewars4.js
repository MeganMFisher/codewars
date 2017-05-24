// QUESTION STRIP COMMENTS

solution = (input, markers) => {
  var coms = input.split('\n');
  for (var i in markers) {
    for (var j = 0; j < coms.length; j++) {
      var indx = coms[j].indexOf(markers[i]);
      if (indx >= 0) {
        coms[j] = coms[j].substring(0, indx).trim();
      } 
    }
  }
  return coms.join('\n');
}


// other answers

function solution(input, markers){
  return input.replace(new RegExp("\\s?[" + markers.join("") + "].*(\\n)?", "gi"), "$1");
}

function solution(input, markers) {
  return input.split('\n').map(
    line => markers.reduce(
      (line, marker) => line.split(marker)[0].trim(), line
    )
  ).join('\n')
}

function solution(input, markers){
  return input.split('\n').map(function(line) {      // each line
    return line.replace(new RegExp('\\s*[' + markers.join('|') + '].*$'), '');
  }).join('\n');
}

// QUESTION One line task: count down 1

countDown=n=>n+2+`!${n+1}!`+n

// other answers 

countDown=n=>2+n+`!${-~n}!`+n

// QUESTION Human readable timetable 

humanReadable = (sec) => {
    let hours = timeFunc(Math.floor(sec / 3600)), 
        minutes = timeFunc(Math.floor((sec % 3600) / 60)), 
        seconds= timeFunc(sec - (hours * 3600)-(minutes * 60));
    return `${hours}:${minutes}:${seconds}`
}

timeFunc = (time) => {
  if(("" + time).length < 2){return '0' + time}
  return time;
}


// other answers 

function humanReadable(seconds) {
  var pad = function(x) { return (x < 10) ? "0"+x : x; }
  return pad(parseInt(seconds / (60*60))) + ":" +
         pad(parseInt(seconds / 60 % 60)) + ":" +
         pad(seconds % 60)
}

function humanReadable(seconds) {
  return [seconds / 3600, seconds % 3600 / 60, seconds % 60].map(function(v) {
    v = Math.floor(v).toString();
    return v.length == 1 ? '0' + v : v;
  }).join(':');
}

p=n=>`0${n}`.slice(-2),humanReadable=(s)=>(m=s/60|0,p(m/60|0)+':'+p(m%60)+':'+p(s%60))

// QUESTION Convert PascalCase string into snake_case

toUnderscore = (string) =>  {
  if(string.length > 1) {
    return string.replace(/([a-z0-9])([A-Z])/g, '$1_$2').toLowerCase(); 
  } else {
    return string.toString()
  }
}

//other answers

  var toUnderscore;

  toUnderscore = function(string) {
    return string.toString().split(/(?=[A-Z])/).join('_').toLowerCase();
  };

  function toUnderscore(string) {
  return (''+string).replace(/(.)([A-Z])/g, '$1_$2').toLowerCase();
}

function toUnderscore(string) {
  return (string+'').replace(/([^A-Z])([A-Z])/g, "$1_$2").toLowerCase();
}

//QUESTION Pete, the Baker

cakes = (recipe, available) => {
  var recipes = [];
  var numbers = [];
  for(var x in recipe){
  	recipes.push(x);
  }
  for(let i = 0; i < recipes.length; i++){
  	if(!available.hasOwnProperty(recipes[i])){
  		return 0;
  	}
  }
  for(var y in recipe){
  	numbers.push(Math.floor(available[y] / recipe[y]));
  }
  numbers.sort(function(a, b){return a-b});
  return numbers[0];
}

// other answers

function cakes(recipe, available) {
  return Object.keys(recipe).reduce(function(val, ingredient) {
    return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
  }, Infinity)  
}

function cakes(recipe, initial){
   return Math.floor(Object.keys(recipe).reduce(function(min, key){
      return Math.min(initial[key] / recipe[key] || 0, min);
   }, Infinity));
}

function cakes(recipe, available) {
  var numCakes = [];
  
  for(var key in recipe){
    if(recipe.hasOwnProperty(key)){
      if(key in available){
        numCakes.push(Math.floor(available[key] / recipe[key]));
      }else{
        return 0;
      }
    }
  }
  
  return Math.min.apply(null, numCakes); 
  
}

// QUESTION The Hashtag Generator

function generateHashtag (str) {
  if(!str || str.length > 140) {
    return false
  } else {
    let uppStr = str.toLowerCase().replace(/(^| )(\w)/g, s => s.toUpperCase())
    let splitStr = uppStr.split('')
    splitStr.unshift('#')
    return splitStr.join('').trim().replace(/\s+/g, '')
    }
}

//other solutions

function generateHashtag (str) {
  return str.length > 140 || str === '' ? false :
    '#' + str.split(' ').map(capitalize).join('');
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


function generateHashtag(str) {
  var hashed = '#' + str.split(' ').map(function(v) {return v.charAt(0).toUpperCase() + v.slice(1);}).join('');
  return hashed.length > 140 || str == "" ? false : hashed;
}

