import express from 'express';
import { searchFood } from '../controllers/nutritionController.js';

const router = express.Router();

// GET /api/nutrition/search?food=apple
router.get('/search', searchFood);

export default router;