// console.log('running');

const express = require('express');

const app = express();

const port = 4045;

app.use(express.json())

app.get('/', (req, res) => {
    res.send(users)
})

const users = [
    { id: 1, name: "Mohan", role: "Dev" },
    { id: 2, name: "Mohan2", role: "New Dev" }
]

const getByIndex = (req, res) => {

    const userId = parseInt(req.params.id);

    const userIndex = users.findIndex(user => user.id === userId)

    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found" });
    }
}


app.delete('/users/:id', (req, res) => {

    const userIndex = getByIndex

    users.splice(userIndex, 1)


    res.json({ message: "Deleted Successfully" })

})

app.listen(port, () => {
    console.log('port running');
})
