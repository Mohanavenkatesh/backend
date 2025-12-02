// step 1 : server
const express = require('express');

// step 2 : create the app
const app = express();

// step 3 : using bodyparser 
app.use(express.json());

// step 4 : small get method endpoint 
app.get('/', (req, res) => {
res.send('Home Endpoint Running')
})

// step 5 : small post method endpoint
app.post('/data', (req, res) => {
    const data = req.body
    if (!data || !data.name) {
        return res.json({ message: 'missing' })
    }
    res.json({ received: data })
})

// step 6 : run the port
const PORT = 2000
app.listen(PORT, (req, res) => {
    console.log('port running')
})