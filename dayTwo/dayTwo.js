var fs = require('fs');
var lines = fs.readFileSync('dayTwo/input.txt').toString().split("\n").filter(Boolean);

console.log(part1());
console.log(part2());

function part1() {      // solution for part 1

  var validCount = 0;

  for (var i in lines) {
    if (isPasswordValidPart1(getEntry(lines[i]))) ++validCount; // increment validCount if password is valid
  }
  return validCount;  // finished
}

  function isPasswordValidPart1(entry) {
    const relevantPassword = [...entry.password].filter(
      char => char === entry.policy.letter);  // filter the policy letter
    return (relevantPassword.length >= entry.policy.botLim  // is the amount valid?
      && relevantPassword.length <= entry.policy.topLim);
  }


function part2() {      // solution for part 2

  var validCount = 0;

  for (var i in lines) {
    if (isPasswordValidPart2(getEntry(lines[i]))) ++validCount;
  }
  return validCount;
}

function isPasswordValidPart2(entry) {
  return (([...entry.password][entry.policy.botLim-1] == entry.policy.letter)
  != ([...entry.password][entry.policy.topLim-1] == entry.policy.letter));
}



function getEntry(line) {  // takes a line, returns it's parts

  return {
    policy: {
      botLim:(line.split(" ")[0].split("-")[0]),  // first number in policy
      topLim:(line.split(" ")[0].split("-")[1]),  // second number in policy
      letter:(line.split(" ")[1].charAt(0))       // letter of policy
    },
    password:(line.split(" ")[2])                 // password
  };
}
