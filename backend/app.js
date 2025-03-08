const express = require('express')
const router = require('./src/routes')
const app = express()
const port = 3000
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
  origin: 'http://localhost:4173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use('/', router)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})