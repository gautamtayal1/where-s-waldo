const prisma = require('../config/db.config')

const charCheckController = async (req, res) => {
  try{
    
    const {x, y, id} = req.body
    console.log(x, y, id)
    const char = await prisma.character.findFirst({where: {id : id}})

    const xStart = char.xStart
    const xEnd = char.xEnd
    const yStart = char.yStart
    const yEnd = char.yEnd

    if(x >= xStart && x <= xEnd && y >= yStart && y <= yEnd){
      res.status(200).json({message: 'Correct', data: {
        char
      }})
    } else {
      res.status(200).json({message: 'Incorrect', data: {
        char
      }})
    }
  } catch (error) {
    res.status(500).json({message: 'Error checking character'})
  }
}

module.exports = charCheckController
