import express from 'express'
import { searchFood } from '../../controllers/nutrition-controllers/getFoodController.js'

const router = express.Router()

// GET /api/nutrition/search?food=apple
router.get('/search', searchFood)

export default router