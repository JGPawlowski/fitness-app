import express from 'express';
import pool from '../config/db.js'; // your Postgres connection pool
const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT u.user_id, u.name, 
             n.protein_grams, n.carbs_grams, n.fat_grams, n.fiber_grams, n.sugar_grams
      FROM users u
      JOIN nutrition n ON u.user_id = n.user_id
      ORDER BY u.user_id;
    `);
    res.json(result.rows); // send array of objects
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;