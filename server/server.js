import express from 'express'
import cors from 'cors'
import nutritionInfoRouter from './routes/nutritionInfoRoute.js'
import nutritionInsertRouter from './routes/nutritionInsertRoute.js'
import getFood from './routes/getFoodRoute.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Server is running!')
});

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Something went wrong!' })
});

//routes with /api
app.use('/api/nutrition', nutritionInfoRouter) // GET user info 
app.use('/api/nutrition', nutritionInsertRouter) // POST nutrition info

// External food search (USDA)
app.use('/api/get-foods', getFood)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


