var fs = require('fs');
var passes = fs.readFileSync('5/input.txt').toString().split("\n").map(pass => pass.replace("\r",""));

console.log(part1());
console.log(part2());


function part1() {
  var highestID = 0;
  var id = 0;
  for (var pass in passes) {
    id = decode(passes[pass]);
    if (id > highestID) {
      highestID = id;
    }
  }
  return highestID;
}

function decode(pass) {
  var row = pass.substring(0,7);
  var col = pass.substring(7);

  var rowVal = 64;
  var currentPassRow = 0;
  for (var char in row) {
    if (row.charAt(char) == 'B') {
      currentPassRow += rowVal;
    }
    rowVal = rowVal/2;
  }

  var colVal = 4;
  var currentPassCol = 0;
  for (var char in col) {
    if (col.charAt(char) == 'R') {
      currentPassCol += colVal;
    }
    colVal = colVal/2;
  }
  return ((currentPassRow * 8) + currentPassCol);
}


function part2() {
  var seatArray = [];
  for (var pass in passes) {
    seatArray.push(decode(passes[pass]));
  }
  seatArray.sort((a,b) => a-b);

  for (var id in seatArray) {
    var temp = (parseInt(id) + 1);
    if ((parseInt(seatArray[temp]) - parseInt(seatArray[parseInt(id)])) === 2) return (parseInt(seatArray[parseInt(id)]) + 1);
  }
}
