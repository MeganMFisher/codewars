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

// QUESTION 