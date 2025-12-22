
const express = require('express');
const session = require('express-session');


// Cookies store data
// Sessions store an ID

const app = express();

app.use(express.json());

const port = 1001;

app.use(session(
    {
        secret: 'secrent-key',
        resave: false,
        saveUninitialized: true
    }
))

app.get('/', (req, res) => {

    req.session.username = 'Mohan';
    res.send('Session Started')

})

app.get('/session', (req, res) => {

    res.send(`Session username ${req.session.username}`)

})

app.get('/session-end', (req, res) => {

    req.session.destroy(() => {
        res.send('Session End')
    })

})


app.listen(port, () => { console.log(`APP RUNNING ${port}`); })