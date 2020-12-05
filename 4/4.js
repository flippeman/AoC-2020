var fs = require('fs');
var lines = fs.readFileSync('4/input.txt').toString().split("\r\n\r\n").map(line => line = line.replace(/(\r\n|\n|\r)/gm, " "));

console.log(part1());
console.log(part2());

function part1() {
  const requiredFields = ['byr','iyr','eyr','hgt','hcl','ecl','pid'];
  var validAmt = 0;
  for (var line in lines) {
    if (requiredFields.every(field => lines[line].includes(field))) ++validAmt;
  }
  return validAmt;
}


function part2() {
  var splitLines = lines.map(line => line.split(/[ |:]+/));

  const requiredFields = [
    {
      field:"byr",
      function: function(year) {
        return (year >= 1920) && (year <= 2002);
      }
    }, {
      field:"iyr",
      function: function(year) {
        return (year >= 2010) && (year <= 2020);
      }
    }, {
      field:"eyr",
      function: function(year) {
        return (year >= 2020) && (year <= 2030);
      }
    }, {
      field:"hgt",
      function: function(height) {
        if (height.includes("cm")) {
          return (parseInt(height.replace("cm","")) >= 150) && (parseInt(height.replace("cm","")) <= 193);
        } else if (toString(height).includes("in")) {
          return (parseInt(height.replace("in","")) >= 59) && (parseInt(height.replace("in","")) <= 76);
        }
      }
    }, {
      field:"hcl",
      function: function(color) {
        return (color.charAt(0)=="#") && ([...color.substring(1)].every(char => char.match(/([a-f]|[0-9])/)));
      }
    }, {
      field:"ecl",
      function: function(color) {
        var allowedColors = ["amb","blu","brn","gry","grn","hzl","oth"];
        return allowedColors.includes(color);
      }
    }, {
      field:"pid",
      function: function(pid) {
        return (pid.length == 9) && ([...pid].every(char => char.match(/[0-9]/)));
      }
    }
  ];

  var validAmt = 0;
  for (var line in splitLines) {
    if (requiredFields.every(field => (splitLines[line].includes(field.field)) &&
    (field.function(splitLines[line][splitLines[line].indexOf(field.field) + 1])))) ++validAmt;
  }
  return validAmt;
}
