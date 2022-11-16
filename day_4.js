const crypto = require('crypto');
const INPUT = 'iwrupvqb';
const md5 = data => crypto.createHash('md5').update(data).digest('hex');
const isStartsWithFiveZeros = data => data.slice(0, 6) === '000000';

let counter = 0;
while (!isStartsWithFiveZeros(md5(`${INPUT}${counter}`))) counter++;

console.log(counter);
