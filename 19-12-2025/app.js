
const express = require('express');

const userRouters = require('./routes/userRoutes')

const app  = express();

const port = 1919;

app.use(express.json())

app.use('/users', userRouters)

app.listen(port,()=>{console.log('APP RUNNING');})