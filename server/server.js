import express from 'express'
import cors from 'cors'
import nutritionRoutes  from './routes/nutritionRoutes.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Something went wrong!' })
})

app.get('/', (req, res) => {
  res.send('Server is running!')
})

//routes with /api
app.use('/api/nutrition', nutritionRoutes) // GET user info 

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


