const {createReadStream} = require('fs');

const stream = createReadStream('./txt-content/big.txt', {highWaterMark: 90000 })

stream.on('data', (result) => {
    console.log(result);
})