// console.log('running');

const express = require('express');

const app = express();

const port = 4545;

app.get('/', (req, res) => {
    res.send('home endpoint')
})

app.get('/search', (req, res) => {
    const city = req.query.city
    const pincode = req.query.pincode
    res.send(`city:${city},pincode:${pincode}`)
})

app.listen(port, () => {
    console.log('port running');
})


// output should look like
// http://localhost:3000/search?city=chennai&age=25
