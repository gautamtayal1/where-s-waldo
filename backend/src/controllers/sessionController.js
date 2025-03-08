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
    const getSession = await prisma.gameSession.findFirst({
      where: {id: sessionId}
    })
    if (!getSession) {
      return res.status(404).send('Session not found')
    }
    const timeTaken = Math.floor((new Date(endTime) - new Date(getSession.startTime)) / 1000);

    const updatedSession = await prisma.gameSession.update({
      where: {id: sessionId},
      data: {endTime, timeTaken}
    })
    res.send(updatedSession)
  } catch (error) {
    console.error('Error in endSession:', error);
    res.status(500).send('Failed to end game session. Please try again.');
  }
}

module.exports = {createSession, endSession}