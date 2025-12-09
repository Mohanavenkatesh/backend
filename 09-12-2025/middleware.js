const express = require('express');
const morgan = require('morgan');

const app = express();

PORT = 8383;

// middleware

// morgan middle ware

app.use(morgan('dev'))

// own middlware
app.use((req, res, next) => {
    console.log('middleware running');
    next()
})

app.get('/', (req, res) => {
    res.sendStatus(200)
})

app.listen(PORT, () => {
    console.log('PORT RUNNING');

})