const fs = require('fs');

const myPath = process.argv[2];

const buf = fs.readFileSync(myPath);

const content = buf.toString();

const splitString = content.split('\n');

const num = splitString.length;

console.log(num-1);
