import express from 'express'
import { getInfoController } from '../controllers/getInfoController.js'

const router = express.Router()

// GET /api/nutrition/:id?date=YYYY-MM-DD
router.get('/:id', getInfoController)

export default router

