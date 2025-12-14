// console.log('running');

const express = require('express');

const app = express();

const port = 4145;

app.use(express.json())

app.get('/', (req, res) => {
    res.send(users)
})

const users = [
    { id: 1, name: "Mohan", role: "Dev" },
    { id: 2, name: "Mohan2", role: "New Dev" }
]

// app.put('/users/:id', (req, res) => {

//     const usersId = parseInt(req.params.id)

//     const { name, role } = req.body

//     const userIndex = users.findIndex(users => users.id === usersId)

//     if (userIndex === -1) {
//         return res.status(400).json({ message: "Not found" })
//     }

//     users[userIndex] = {
//        ...users[userIndex],
//         name,
//         role
//     }

//     res.json({
//         message: "Updated Succeffully",
//         user: users[userIndex]
//     })

// })

app.patch('/users/:id', (req, res) => {

    const userId = parseInt(req.params.id);

    const updates = req.body

    const userIndex = users.findIndex(user => user.id === userId)

    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    users[userIndex] = { ...users[userIndex], ...updates }

    res.json({ message: "Updated Successfully", user: users[userIndex] })

})

app.listen(port, () => {
    console.log('port running');
})
