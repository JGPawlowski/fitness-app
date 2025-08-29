import pool from '../config/db.js'


// insert food into db
export const insertNutritionController = async (req, res) => {
  try {
    const { nutrients } = req.body
    const user_id = 1
    if (!nutrients) return res.status(400).json({ error: 'Nutrients are required' })

    const { Calories, Protein, Fats, Carbs, Fiber, Sugar } = nutrients
    const today = new Date();
    const todaysDate = today.toLocaleDateString("en-CA");

    const existing = await pool.query(
      `select * from nutrition where user_id = $1 and entry_date = $2;`,
      [user_id, today]
    )

    if (existing.rows.length > 0) {
      // Update existing row
      const updateQuery = `
        update nutrition
        set 
          total_protein = total_protein + $1,
          total_carb = total_carb + $2,
          total_fat = total_fat + $3,
          total_fiber = total_fiber + $4,
          total_sugar = total_sugar + $5,
          total_calories = total_calories + $6
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
          (user_id, total_protein, total_carb, total_fat, total_fiber, total_sugar, total_calories, entry_date)
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



// search food from api
export const searchFood = async (req, res) => {
  try {
    const { food } = req.query
    if (!food) return res.status(400).json({ error: 'Food query is required' })

      // post request to the nutritionix NLP endpoint 
    const response = await fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-app-id': process.env.NUTRITIONIX_APP_ID,
        'x-app-key': process.env.NUTRITIONIX_API_KEY,
      },
      body: JSON.stringify({ query: food }),
    })

    // parse the json response from the api
    const data = await response.json()

    if (!data.foods || !Array.isArray(data.foods)) {
      // If API response doesn't have a foods array
      return res.status(500).json({ error: 'Invalid response from Nutritionix', details: data })
    }

    res.json(data.foods)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error', details: err.message })
  }
}



// get daily info from the db
export const getInfoController = async (req, res) => {
  try {
    const { id } = req.params
    // Use local date to avoid UTC issues
    const date = req.query.date || new Date().toLocaleDateString('en-CA') // YYYY-MM-DD

    const result = await pool.query(`
      SELECT u.user_id, u.name, 
             n.total_calories, n.total_protein, n.total_carb, n.total_fat, n.total_fiber, n.total_sugar
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


