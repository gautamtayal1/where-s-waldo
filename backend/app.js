const express = require('express')
const router = require('./src/routes')
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/', router)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})