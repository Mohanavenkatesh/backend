const express = require('express');

const app = express();

app.use(express.json())

const PORT = 9990;

const newUsers = [
    {
        id: 1,
        namee: "Devil",
        message: "not"
    },
    {
        id: 2,
        namee: "Anger",
        message: "yes"
    }
]

app.put('/newusers/:id', (req, res) => {

    const userId = parseInt(req.params.id)

    const { namee, message } = req.body

    const userIndex = newUsers.findIndex(newUsers => newUsers.id === userId)

    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found" })
    }

    newUsers[userIndex] = {
        ...newUsers[userIndex],
        namee,
        message
    }

    res.json({
        message: "Yeah Updated",
        namee: newUsers[userIndex]
    })

})

app.listen(PORT, () => {
    console.log('PORT RUNNING');
})


