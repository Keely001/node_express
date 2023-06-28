const {readFile,writeFile} = require('fs')

readFile('./txt-content/first.txt', 'utf-8', (err, result) =>{
    if(err){
        console.log(err);
        return;
    }
    const fst= result;
    readFile(
        './txt-content/second.txt','utf-8', (err, result) => {
            if(err){
                console.log(err);
                return;
            }
            const sec = result;
            writeFile(
              './txt-content/result-async.txt',
              `Here is the result: ${fst} , ${sec}`,
              (err, result) =>{
                if (err){
                    console.log(err);
                    return;
                }
                console.log(result);
              }
            )
        }
    )
})