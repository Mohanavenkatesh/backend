

const express = require('express')
const app = express()

const helloRoutes = require('./routes/routes')

app.use('/hello', helloRoutes)

app.listen(3000, () => {
    console.log('Server started on port 3000')
})
