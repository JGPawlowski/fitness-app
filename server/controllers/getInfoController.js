import pool from '../config/db.js'

export const getInfoController = async (req, res) => {
  try {
    const { id } = req.params
    // Use local date to avoid UTC issues
    const today = new Date()
    const date = req.query.date || today.toLocaleDateString('en-CA'); // YYYY-MM-DD

    const result = await pool.query(`
      SELECT u.user_id, u.name, 
             n.calories, n.protein_grams, n.carbs_grams, n.fat_grams, n.fiber_grams, n.sugar_grams
      FROM users u
      JOIN nutrition n ON u.user_id = n.user_id
      WHERE u.user_id = $1 AND n.entry_date = $2;
    `, [id, date])

    res.json(result.rows[0] || {}); // empty object if no entry
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
}
