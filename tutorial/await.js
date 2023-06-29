const {readFile, writeFile} = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);


const start = async () => 
{
    try{
        const first = await readFilePromise('./txt-content/first.txt', 'utf-8');
        const second = await readFilePromise('./txt-content/second.txt' , 'utf-8');
        await writeFilePromise('./txt-content/result.txt' , 
        `Bazu bigman bazu ${first} ${second}`);
        console.log(first, second);
    }
    catch (error){
        console.log(error);
    }
}

// const getText = (path) => {
//     return new Promise((resolve,reject) =>{
//         readFile(path,'utf-8',(err, data) => {
//             if(err){
//                 reject(err);
//             }else {
//                 resolve(data)
//             }
//         })
//     })
// }

// const start = async () => {
//     try{
//         const first = await getText('./txt-content/first.txt');
//         console.log(first);
//     }
//     catch (error){
//         console.log(error);
//     }
// }

start()

