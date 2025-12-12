// console.log('running');

const express = require('express');

const app = express();

const port = 4545;

app.use(express.json())

app.get('/', (req, res) => {
    res.send('home endpoint')
})

app.post('/post',(req, res)=>{
console.log(req.body);
    res.send(req.body)
})

app.listen(port, () => {
    console.log('port running');
})


// output should look like
// http://localhost:3000/search?city=chennai&age=25
