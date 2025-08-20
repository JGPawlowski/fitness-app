import pool from '../config/db.js'

export const insertNutritionController = async (req, res) => {
  try {
    const { nutrients } = req.body
    const user_id = 1
    if (!nutrients) return res.status(400).json({ error: 'Nutrients are required' })

    const { Calories, Protein, Fats, Carbs, Fiber, Sugar } = nutrients
    const today = new Date().toISOString().split('T')[0] // 'YYYY-MM-DD'

    const existing = await pool.query(
      `select * from nutrition where user_id = $1 and entry_date = $2;`,
      [user_id, today]
    )

    if (existing.rows.length > 0) {
      // Update existing row
      const updateQuery = `
        update nutrition
        set 
          protein_grams = protein_grams + $1,
          carbs_grams = carbs_grams + $2,
          fat_grams = fat_grams + $3,
          fiber_grams = fiber_grams + $4,
          sugar_grams = sugar_grams + $5,
          calories = calories + $6
        where user_id = $7 and entry_date = $8;
      `
      const updateValues = [
        Protein || 0,
        Carbs || 0,
        Fats || 0,
        Fiber || 0,
        Sugar || 0,
        Calories || 0,
        user_id,
        today
      ]
      await pool.query(updateQuery, updateValues)
      return res.status(200).json({ message: 'Nutrition updated for today' })
    } else {
      // Insert new row
      const insertQuery = `
        insert into nutrition
          (user_id, protein_grams, carbs_grams, fat_grams, fiber_grams, sugar_grams, calories, entry_date)
        values ($1, $2, $3, $4, $5, $6, $7, $8);
      `
      const insertValues = [
            user_id,
            Protein || 0,
            Carbs || 0,
            Fats || 0,
            Fiber || 0,
            Sugar || 0,
            Calories || 0,
            today
        ]

      await pool.query(insertQuery, insertValues)
      return res.status(201).json({ message: 'Nutrition added for today' })
    }
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
}

