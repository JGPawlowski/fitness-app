import express from 'express'
import { getInfoController, searchFood, insertNutritionController } from '../controllers/nutritionControllers.js'

const router = express.Router()

            /* GET */
// GET /api/nutrition/search?food=apple
router.get('/search', searchFood)

// GET /api/nutrition/:id?date=YYYY-MM-DD
router.get('/:id', getInfoController)


            /* POST */
// POST /api/nutrition/add
router.post('/add', insertNutritionController)

export default router
