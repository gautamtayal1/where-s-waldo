const express = require('express')
const gameRouter = express.Router()
const charCheckController = require('../controllers/charCheckController')
const {createSession, endSession, createUser, getLeaderboard} = require('../controllers/sessionController')

gameRouter.post('/check', charCheckController)
gameRouter.post('/session/create', createSession)
gameRouter.put('/session/end', endSession)
gameRouter.post('/user/create', createUser)
gameRouter.post('/leaderboard', getLeaderboard)


module.exports = gameRouter