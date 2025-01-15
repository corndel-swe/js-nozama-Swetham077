import express from 'express'

const app = express()
app.use(express.json())

// You can delete this endpoint
app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to Nozama!', time: Date.now() })
})

// TODO: add endpoints during the workshop

export default app

