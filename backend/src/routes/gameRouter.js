const express = require('express')
const gameRouter = express.Router()

gameRouter.get('/', (req, res) => {
  res.send('Hello World')
})

module.exports = gameRouter