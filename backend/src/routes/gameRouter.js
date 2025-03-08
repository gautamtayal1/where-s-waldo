const express = require('express')
const gameRouter = express.Router()
const charCheckController = require('../controllers/charCheckController')

gameRouter.post('/check', charCheckController)

module.exports = gameRouter