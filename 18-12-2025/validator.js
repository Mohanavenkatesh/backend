const { body } = require('express-validator');

const validationProcess = [
    body('name').notEmpty().trim().withMessage('You Have To Type Your Name')
]

module.exports = { validationProcess }