const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./txt-content/first.txt', 'utf-8');
const second = readFileSync ('./txt-content/second.txt', 'utf-8');

writeFileSync(
    './txt-content/result.txt',
    `Here is the result : ${first}, ${second}`,
    {flag: 'a'}
)

console.log(first,second);