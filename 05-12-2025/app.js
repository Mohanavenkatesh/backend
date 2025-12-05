const express = require('express');

const app = express();

const port = 9000;

const postController = require('./routes/route')

// end point one
app.get('/',(req,res)=>{
    res.send({hi:'hello'})
})


app.post('/post', postController)


app.listen(port ,()=>{
    console.log('port rnning');
    
});
