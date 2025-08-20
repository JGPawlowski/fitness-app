import express from 'express'
import { insertNutritionController } from '../controllers/insertNutritionController.js'

const router = express.Router()

// POST /api/nutrition/add
router.post('/add', insertNutritionController)

export default router
