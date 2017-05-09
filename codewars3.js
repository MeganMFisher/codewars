// QUESTION Break camelCase

function solution(string) {
  return string.replace(/[A-Z]/g," $&")
}

solution = (string) => string.replace(/[A-Z]/g," $&")

// other answers

function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));

}
