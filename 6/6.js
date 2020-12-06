var fs = require('fs');
var groups = fs.readFileSync('6/input.txt').toString().split("\n\r").map(group => group.split(/\r\n|\r|\n/gm).filter(group => group != ''));

console.log(part1());
console.log(part2());


function part1() {
  var totVal = 0;
  var tempLetters = [];
  for (var group in groups) {
    groups[group].map(person => [...person].map(answer => {if(!tempLetters.includes(answer)) tempLetters.push(answer);} ))
    totVal += tempLetters.length;
    tempLetters = [];
  }
  return totVal;
}


function part2() {
  var totVal = 0
  var tempLetters = [];

  for (var group in groups) {
    tempLetters = [...groups[group][0]];
    groups[group].map(person => {tempLetters= tempLetters.filter(answer => person.includes(answer));});
    totVal += tempLetters.length;
  }
  return totVal;
}
