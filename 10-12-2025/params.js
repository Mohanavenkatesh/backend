import express from "express";

const app = express();

const port = 8989;;

app.get('/', (req, res) => {
    res.send(200)
})

app.get("/api/users/:id", (req, res) => {
    const id = req.params.id
    console.log(id);
    console.log(res.send('running'))
})

app.listen(port, () => {
    console.log('port running');
})