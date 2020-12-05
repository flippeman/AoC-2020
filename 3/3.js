var fs = require('fs');
var lines = fs.readFileSync('3/input.txt').toString().split("\n").map(line => line = line.replace("\r","")).map(line => line = [...line]).filter(Boolean);

console.log(part1());
console.log(part2());

function part1() {
  var treeCount = 0;
  for (var row=1; row<lines.length-1; row++) {
    if (lines[row][((row * 3)) % lines[row].length] == "#") ++treeCount;
  }
  return treeCount;
}

function part2() {
  var firstCount = 0;
  var secondCount = 0;
  var thirdCount = 0;
  var fourthCount = 0;
  var fifthCount = 0;

  for (var row=1; row<lines.length-1; row++) {

    if (lines[row][row % lines[row].length] == "#") ++firstCount;

    if (lines[row][(row * 3) % lines[row].length] == "#") ++secondCount;

    if (lines[row][(row * 5) % lines[row].length] == "#") ++thirdCount;

    if (lines[row][(row * 7) % lines[row].length] == "#") ++fourthCount;

    if ((row % 2 == 0) && (lines[row][(row/2) % lines[row].length] == "#")) ++fifthCount;
  }
  return firstCount * secondCount * thirdCount * fourthCount * fifthCount;
}
