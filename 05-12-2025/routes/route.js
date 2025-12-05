const express = require('express');

const router = express.Router();

const {postController} = require('../controllers/controllers')

router.post('/post',postController)

module.exports = router