const express = require('express');

const routres = express.Router();

const {getController} = require('../controllers/controller');

routres.get('/', getController);

module.exports = routres;