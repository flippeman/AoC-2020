var fs = require('fs');
var entries = fs.readFileSync('1/input.txt').toString().split("\n");
console.log(entries);

console.log(part1());
console.log(part2());



function part1() {
  var matchNums = [];

  for (var i in entries) {                              // go through all numbers in the input
    const currentNum = parseInt(entries[i]);

    for (var j in matchNums) {                          // go through all previous numbers of the input
      const currentMatchNum = parseInt(matchNums[j]);
      if (currentNum + currentMatchNum == 2020) {       // if the current number adds up to 2020
        return currentNum * currentMatchNum;            // with a previous number, log their product

      }
    }
    matchNums.push(currentNum);
  }
}

function part2() {
  var lowCount = 0;                                     // start counter att lowest number in array
  var midCount = 1;                                     // start counter at second number in array
  var topCount = entries.length - 1;                    // start counter at last number in array

  var sortedEntries = entries.sort((a,b)=>a-b);         // sort array
  while (true) {
    const lowNum = parseInt(sortedEntries[lowCount]);   // assign number from counter
    const midNum = parseInt(sortedEntries[midCount]);   // assign number from counter
    const topNum = parseInt(sortedEntries[topCount]);   // assign number from counter

    if ((lowNum + midNum + topNum) == 2020) {           // finished
      return (lowNum * midNum * topNum);
    } else if ((lowNum + midNum + topNum) > 2020) {     // if total is greater than 2020, decrement top counter
        --topCount;
    } else {
      if (midNum == topNum) {                           // if mid counter reaches top counter, increment low counter and start over mid counter
        midCount = ++lowCount + 1;
      } else {
        ++midCount;                                     // otherwise, increment mid counter
      }
    }
  }
}
