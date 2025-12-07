
//  exploring file system

const { log, error } = require('console');
const folder = require('fs')


// creating folder
if (!folder.existsSync('./newfolder')) {

    folder.mkdir('./newfolder', (err) => {
        if (err) {
            console.log(err.message);

        } else {
            console.log('folder created');

        }
    })
} else {
    console.log("folder already created");

}

// write new file

folder.writeFile('server.js', 'from writefile', (err) => {
    console.log('created file');

})

//  readfile 

folder.readFile('server.js', (err, data) => {
    if (err) {
        console.log(err);

    } else {
        console.log(data.toString());

    }
})

// delet file

folder.unlink('test.js',(err)=>{
    console.log(err);
    
})

// delete folder 

folder.rmdir('test',(err)=>{
    console.log(err);
    
})