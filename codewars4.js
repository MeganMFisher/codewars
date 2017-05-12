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

// QUESTION 