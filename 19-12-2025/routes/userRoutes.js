
const express = require('express');

const router = express.Router();

const user = [
    {
        id: 1,
        name: "mohan"
    },
    {
        id: 2,
        name: "alex"
    }
    ,
    {
        id: 3,
        name: "kevin"
    }
]
router.get('/', (req, res) => {
    res.json(user)
})

router.get('/:id', (req, res) => {

    const userId = parseInt(req.params.id)

    const userIndex = user.find(get => userId === get.id)

    if (userIndex === -1) {
        res.json({ message: "not foubd" })
    }

    res.json(userIndex)

})

router.post('/', (req, res) => {

    const { name } = req.body;

    const newUser = {
        id: user.length + 1,
        name
    }

    user.push(newUser);

    res.status(201).json(newUser);

})

router.delete('/:id', (req, res) => {

    const userId = parseInt(req.params.id);

    const UserIndex = user.findIndex(del => del.id === userId)

    if (UserIndex === -1) {
        res.json({ message: "not found" })
    }

    user.splice(UserIndex, 1)

    res.json({ message: "deleted sussfully" })

})

module.exports = router;