const fs = require('fs');
const inp = fs.readFileSync('js\\day3.txt', 'utf-8').split('');

const coordinates = new Set().add(`0x0`);// avoids duplicates  // set stores the cordinate values
//added '0x0' as the santa start at position 0

// reduce() method returns a single value: the function's accumulated result.
// inp.reduce((curCoords, direction) => {
//   let newCoords = {x: 0, y: 0};

//   if (direction === '^') newCoords = {x: curCoords.x, y: curCoords.y + 1};
//   if (direction === 'v') newCoords = {x: curCoords.x, y: curCoords.y - 1};
//   if (direction === '>') newCoords = {x: curCoords.x + 1, y: curCoords.y};
//   if (direction === '<') newCoords = {x: curCoords.x - 1, y: curCoords.y};

//   coordinates.add(`${newCoords.x}x${newCoords.y}`);
//   return newCoords;
// }, {x: 0, y: 0});

// console.log(coordinates.size);

var x=0
var y=0

for (var i=0;i<inp.length;i++){

  let newCoords = {x: 0, y: 0};

  if (inp[i] == '^')  y++;
  if (inp[i] == 'v')  y--;
  if (inp[i] == '>')  x++;
  if (inp[i] == '<')  x--;
  var st=x+'x'+y;
  coordinates.add(st)

}
console.log(coordinates.size)
