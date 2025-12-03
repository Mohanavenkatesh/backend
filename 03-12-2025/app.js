const express = require('express');

const app = express();

app.use(express.json());

const patientRoutes = require('./routes/patientRoutes')

app.use('/patients',patientRoutes)

module.exports = app