const cookieParser = require('cookie-parser');

const express = require('express');

const app = express();

app.use(express.json());

app.use(cookieParser())

const port = 1122;

const USER =
{
    user: "MOHAN",
    password: "ABCD"
}


app.get('/', (req, res) => {

    res.send('cookie practice')

})

// login

app.post('/login', (req, res) => {

    const { user, password } = req.body;

    if (user === USER.user && password === USER.password) {

        res.cookie("sessionId", "12345abcde", {
            httpOnly: true,
            maxAge: 10000
        })

        return res.json({ message: "Login Successfully" })

    }

    res.status(401).json({ message: "Invalid Credintials" })

})

// dasboard

app.get('/dashboard', (req, res) => {

    if (!req.cookies.sessionId) {

        return res.json({ message: 'access denied' })

    }

    res.json({ message: 'Welcome to Dasboard' })

})

// logout

app.post('/logout', (req, res) => {

    res.clearCookie('sessionId')

    res.json({message:"Logout Successfully"})

})

app.listen(port, () => { console.log('APP RUNNING'); })