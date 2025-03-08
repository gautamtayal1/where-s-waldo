const express = require('express')
const gameRouter = require('./gameRouter')
const router = express.Router()

router.use('/game', gameRouter)

module.exports = router