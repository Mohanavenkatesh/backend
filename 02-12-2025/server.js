// 1
const express = require('express')

// 2
const app = express()

// 3
app.use(express.json())

// 4
app.get('/', (req, res) => {
    res.send('get endpoint')
})

// 5
app.put('/user/:id', (req, res) => {
    const userid = req.params.id
    const newData = req.body
    res.json({ id: userid, data: newData })
})

// 6
app.delete('/user/:id',(req,res)=>{
const userid = req.params.id
res.json({id:userid,message:"msg deleted"})
})

// 7
const port = 2000;

app.listen(port, () => {
    console.log('port running');

})