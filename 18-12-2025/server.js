
const express = require("express");
const { body } = require("express-validator");

const { validationResult } = require("express-validator");

const { validationProcess } = require ("./validator.js");

const app = express()

app.use(express.json())

const port = 6767

app.post('/users', ...validationProcess, (req, res) => {

    const error = validationResult(req)

    if (!error.isEmpty()) {
        return res.json({
            message : "somthing problem",

            error:error.array()
        })
    }

    res.send(`Hi ${req.body.name} `)

})

app.listen(port, () => {
    console.log('app running ')
})