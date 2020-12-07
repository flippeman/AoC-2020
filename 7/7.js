var fs = require('fs');
var rules = fs.readFileSync('7/input.txt').toString().split("\r\n").map(rule => rule.split(/contain|,/gm));

//console.log(rules);
var temp = "Hej jag heter bajs";
console.log(temp.slice(0,temp.indexOf("bajs")));
console.log(["1","2"].concat((["3","4"]).concat(["5","6"])));
console.log(part1());
//console.log(part2());


function part1() {
  return canCarry("shiny gold");
}

function canCarry(parentBag) {
  var tempArray = [];
  rules.filter(rule => rule.slice(1).some(bag => {
    if (bag.includes(parentBag)) tempArray.push(rule[0].slice(0,rule[0].indexOf(" bags")));
  }));
  console.log(tempArray);
  return tempArray.concat();
}

/*{
  return (bag.includes("shiny gold") ? [parentBag] : )
})*/
function part2() {

}
