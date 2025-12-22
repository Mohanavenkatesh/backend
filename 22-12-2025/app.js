
const express = require('express');

const app = express();

app.use(express.json());

const port = 1001;

// custom middleware
const loggerMiddleware = (req, res, next) => {

    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);

    next()

}

app.use(loggerMiddleware)

const auth = (req, res, next) => {

    const token = req.headers.authorization

    if (!token) {
        return res.status(401).json({ msg: 'not found' })
    }

    if (token !== 'my-token') {
        return res.status(403).json({ msg: 'invalid token' })
    }

    next()

}


// public url
app.get('/', (req, res) => {

    res.send('Pubilc URL')

})

// protuceted url
app.get('/dashboard', auth ,(req, res) => {

    res.send('Producted URL')

})


app.listen(port, () => { console.log(`APP RUNNING ${port}`); })