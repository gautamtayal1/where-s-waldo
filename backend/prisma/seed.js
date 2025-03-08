const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

async function main () {
  const games = await prisma.game.createMany({
    data:[
      {name: "party"},
      {name: "concert"},
      {name: "garden"},
    ]
  })

  const partyGame = await prisma.game.findFirst({where: {name: 'party'}})
  const gardenGame = await prisma.game.findFirst({where: {name: 'garden'}})
  const concertGame = await prisma.game.findFirst({where: {name: 'concert'}})

  const characters = await prisma.character.createMany({
    data:[
      {name: "Jenna", gameId: partyGame.id, xStart: 95, xEnd: 100, yStart: 80, yEnd: 93},
      {name: "Alex", gameId: partyGame.id, xStart: 63, xEnd: 69, yStart: 36, yEnd: 50},
      {name: "Marcus", gameId: partyGame.id, xStart: 93, xEnd: 98, yStart: 6, yEnd: 19},

      {name: "Taylor", gameId: concertGame.id, xStart: 93, xEnd: 98, yStart: 80, yEnd: 100},
      {name: "Casey", gameId: concertGame.id, xStart: 21, xEnd: 25, yStart: 7, yEnd: 23},
      {name: "Jordan", gameId: concertGame.id, xStart: 2, xEnd: 6, yStart: 79, yEnd: 100},

      {name: "Evelyn", gameId: gardenGame.id, xStart: 0, xEnd: 6, yStart: 36, yEnd: 50},
      {name: "Leo", gameId: gardenGame.id, xStart: 93, xEnd: 100, yStart: 2, yEnd: 13},
      {name: "Jen", gameId: gardenGame.id, xStart: 70, xEnd: 75, yStart: 85, yEnd: 98},
    ]
  })

  console.log(games)
  console.log(characters)
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1)
  })
  .finally(async() => {
    await prisma.$disconnect()
  })