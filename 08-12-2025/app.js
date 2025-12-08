const { log } = require('console');
const steams = require('fs')


// reading 

const read = steams.createReadStream('app.txt' ,{encoding:'utf-8'})

read.on('data', (chunk) => {
    console.log('BUFFEEEERRRRRRRRRRRR');
    console.log(chunk);
})

// writing

const write = steams.createWriteStream('newApp.txt')

write.on('data',(chunk)=>{
    console.log(chunk);
})

// pipe

read.pipe(write)