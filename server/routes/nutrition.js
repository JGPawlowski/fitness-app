// backend/routes/nutrition.js
import express from 'express';
import pool from '../config/db.js';

const router = express.Router();

// backend/routes/nutrition.js
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params; // get the user id
    const date = req.query.date || new Date().toISOString().split('T')[0]; // default to todays date

    const result = await pool.query(`
      SELECT u.user_id, u.name, 
             n.calories, n.protein_grams, n.carbs_grams, n.fat_grams, n.fiber_grams, n.sugar_grams
      FROM users u
      JOIN nutrition n ON u.user_id = n.user_id
      WHERE u.user_id = $1 and n.entry_date = $2;
    `, [id, date]);

    res.json(result.rows[0] || {}); // send empty object if no entry
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
