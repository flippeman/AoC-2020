var fs = require('fs');
var rules = fs.readFileSync('7/input.txt').toString().split("\r\n").map(rule => rule.split(/contain|,/gm));

console.log(part1().length);
console.log(part2());


function part1() {
  return [...new Set(canCarry("shiny gold"))];
}


function canCarry(parentBag) {
  var tempArray = [];
  rules.filter(rule => rule.slice(1).some(bag => {
    if (bag.includes(parentBag)) tempArray.push(rule[0].slice(0,rule[0].indexOf(" bags")));
  }));
  for (var bag in tempArray) {
    tempArray = tempArray.concat(canCarry(tempArray[bag]));
  }
  return tempArray;
}


function part2() {
  return insideBag("shiny gold",1)
}


function insideBag(parentBag, scalar) {
  var returnVal = 0;
  rules.filter(rule => rule[0].includes(parentBag))[0].slice(1).forEach(bag => {
      if (!bag.includes("no other bags")) {
        returnVal += parseInt(insideBag(bag.trim().substring(2,bag.indexOf(" bag")),bag.trim().charAt(0)));
      }
    });
  if (parentBag == "shiny gold") {
      return returnVal;
  } else if (returnVal > 0) {
    return (parseInt(returnVal) * parseInt(scalar))+parseInt(scalar);
  } else {
    return parseInt(scalar);
  }
}
