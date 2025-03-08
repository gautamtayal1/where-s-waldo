const express = require('express')
const gameRouter = express.Router()
const charCheckController = require('../controllers/charCheckController')
const {createSession, endSession} = require('../controllers/sessionController')

gameRouter.post('/check', charCheckController)
gameRouter.post('/session/create', createSession)
gameRouter.put('/session/end', endSession)

module.exports = gameRouter