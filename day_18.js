
// function life(grid, stuck) {
//     function calc(state, i, j) {
//       const adjacent = [
//         grid[i - 1] && grid[i - 1][j - 1],
//         grid[i - 1] && grid[i - 1][j + 0],
//         grid[i - 1] && grid[i - 1][j + 1],
//         grid[i + 0] && grid[i + 0][j - 1],
//         grid[i + 0] && grid[i + 0][j + 1],
//         grid[i + 1] && grid[i + 1][j - 1],
//         grid[i + 1] && grid[i + 1][j + 0],
//         grid[i + 1] && grid[i + 1][j + 1],
//       ].filter(x => x).length;
//       if (adjacent === 3) {
//         return true;
//       } else if (adjacent === 2) {
//         return state;
//       } else {
//         return false;
//       }
//     }
//     return grid.map((row, i) =>
//       row.map((cell, j) => (stuck && stuck(i, j)) || calc(cell, i, j)),
//     );
//   }
  
// function part1(input, steps = 100) {
//     const grid1 = input.split('\n').map(x => x.split('').map(c => c === '#'));
//     const result = new Array(steps).fill().reduce(x => life(x), grid1);
//     return result.reduce((prev, row) => prev.concat(row)).filter(x => x).length;
//   }
  
// function part2(input, steps = 100) {
//     const grid1 = input.split('\n').map(x => x.split('').map(c => c === '#'));
//     const corner = (i, j) =>
//       (i === 0 || i === grid1.length - 1) && (j === 0 || j === grid1.length - 1);
//     const grid2 = grid1.map((row, i) =>
//       row.map((cell, j) => cell || corner(i, j)),
//     );
//     const result = new Array(steps).fill().reduce(x => life(x, corner), grid2);
//     return result.reduce((prev, row) => prev.concat(row)).filter(x => x).length;
//   }
//   const fs = require('fs');
// const INPUT = fs.readFileSync('js\\day18.txt', 'utf-8')
// var val=part1(INPUT)
// console.log(val)
// var val1=part2(INPUT)
// console.log(val1)
const fs = require('fs');
const INPUT = fs.readFileSync('js\\day18.txt', 'utf-8').split(/\n|/);
const WIDTH = 100;
const HEIGHT = 100;

class Grid {
  constructor(width, height, cells) {
    this.width = width;
    this.height = height;
    this.cells = cells;
    this.onSymbol = '#';
    this.offSymbol = '.';
  }

  getCell(x, y) {
    return this.cells[this.width * x + y];
  }

  setCell(x, y, value) {
    this.cells[this.width * x + y] = value;
    return this;
  }

  toggleCell(x, y) {
    return this.setCell(x, y, !this.isOn(x, y));
  }

  isOn(x, y) {
    return this.getCell(x, y) === this.onSymbol;
  }

  isOff(x, y) {
    return this.getCell(x, y) === this.offSymbol;
  }

  isInGrid(x, y) {
    return (x >= 0 && x < this.width && y >= 0 && y < this.height);
  }

  getNeighboursCount(x, y) {
    let count = this.isOn(x, y) ? -1 : 0;

    for (let yD = 0; yD < 3; yD++) {
      for (let xD = 0; xD < 3; xD++) {
        if (this.isInGrid(x + xD - 1, y + yD - 1) && this.isOn(x + xD - 1, y + yD - 1)) {
          count++;
        }
      }
    }

    return count;
  }

  tick() {
    let cells = new Array(this.width * this.height).fill(this.offSymbol);

    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        let onLightsCount = this.getNeighboursCount(x, y);

        if (this.isOn(x, y)) {
          if (onLightsCount === 2 || onLightsCount === 3) {
            cells[this.width * x + y] = this.onSymbol;
          }
        } else if (onLightsCount === 3) {
          cells[this.width * x + y] = this.onSymbol;
        }
      }
    }

    this.cells = cells;
  }

  render() {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        process.stdout.write(this.isOn(x, y) ? this.onSymbol : this.offSymbol);
      }

      process.stdout.write('\n');
    }
  }
}

let grid = new Grid(WIDTH, HEIGHT, INPUT);
for (let i = 0; i < 100; i++) grid.tick();

const result = grid.cells.reduce((total, cell) => cell === '#' ? ++total : total, 0);

console.log(result);