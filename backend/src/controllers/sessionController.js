const prisma = require('../config/db.config')

const createSession = async(req, res) => {
  const {gameName, startTime} = req.body
  const newSession = await prisma.gameSession.create({
    data: {
      startTime,
      gameName
    }
  })
  res.send(newSession)
}

const endSession = async(req, res) => {
  try {
    const {sessionId, endTime} = req.body
    const updatedSession = await prisma.gameSession.update({
      where: {id: sessionId},
      data: {endTime}
    })
    res.send(updatedSession)
  } catch (error) {
    console.error('Error in endSession:', error);
    res.status(500).send('Failed to end game session. Please try again.');
  }
}

module.exports = {createSession, endSession}