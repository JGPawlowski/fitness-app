import express from 'express'
import pkg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const { Pool } = pkg

const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
})

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

// Test route
app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()')
    res.json({ message: 'Database connected!', time: result.rows[0] })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Database connection failed' })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

