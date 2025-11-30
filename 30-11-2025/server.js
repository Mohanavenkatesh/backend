const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('This is backend')
})

app.get('/hello', (req, res) => {
    res.json({ msg: "hi" })
})

const PORT = 2000;

app.listen(PORT, () => {
    console.log("Port Running");
})