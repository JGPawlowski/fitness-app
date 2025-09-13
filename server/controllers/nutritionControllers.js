import pool from '../config/db.js'

export const insertNutritionController = async (req, res) => {
  try {
    const { foodName, nutrients } = req.body;
    const user_id = 1;

    if (!foodName || !nutrients)
      return res.status(400).json({ error: 'Food name and nutrients are required' });

    const { Calories, Protein, Fats, Carbs, Fiber, Sugar } = nutrients;
    const entry_date = new Date().toLocaleDateString("en-CA") // YYYY-MM-DD

    // Insert the new nutrition row
    const insertQuery = `
      INSERT INTO nutrition
        (user_id, entry_date, food_name, protein, carbs, fat, fiber, sugar, calories)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
      RETURNING *;
    `;
    const insertValues = [
      user_id, entry_date, foodName,
      Protein || 0, Carbs || 0, Fats || 0,
      Fiber || 0, Sugar || 0, Calories || 0
    ];

    const inserted = await pool.query(insertQuery, insertValues);

    // Return only the inserted row
    res.status(201).json({
      message: 'Food added for today',
      food: inserted.rows[0]
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};


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

// export const getUser = async (req, res) => {
//   try {

//     const { user_id } = req.query
//     if (!user_id) return res.status(400).json({error: 'User ID query is required'})

//     const response = await pool.query(`
//       select name from users
//       where user_id = $1
//       `, [user_id])


//       res.json(response.rows[0] || null)
//   }
//   catch (err) {
//     console.error(err)
//     res.status(500).json({error: 'Server error', details: err.message})
//   }
// }


export const getInfoController = async (req, res) => {
  try {
    const { id } = req.params;
    const date = req.query.date || new Date().toLocaleDateString("en-CA")

    // 1. Get all nutrition rows for that user & date
    const rowsResult = await pool.query(`
      SELECT *
      FROM nutrition
      WHERE user_id = $1 AND entry_date = $2
      ORDER BY nutrition_id;
    `, [id, date]);
    const rows = rowsResult.rows;

    // 2. Get totals + user name in one query
    const totalsResult = await pool.query(`
      SELECT 
        u.name,
        SUM(n.protein)   AS total_protein,
        SUM(n.carbs)     AS total_carbs,
        SUM(n.fat)       AS total_fat,
        SUM(n.fiber)     AS total_fiber,
        SUM(n.sugar)     AS total_sugar,
        SUM(n.calories)  AS total_calories
      FROM users u
      JOIN nutrition n ON u.user_id = n.user_id
      WHERE u.user_id = $1 AND n.entry_date = $2
      GROUP BY u.name;
    `, [id, date])

    // totalsResult.rows[0] contains the summed values and name
    const totals = totalsResult.rows[0] || {
      name: null,
      total_protein: 0,
      total_carbs: 0,
      total_fat: 0,
      total_fiber: 0,
      total_sugar: 0,
      total_calories: 0
    }

    res.json({
      user: { id, name: totals.name },
      totals,
      rows
    })

  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
}


export const deleteFood = async (req, res) => {
  const { row } = req.params

  try {
    const result = pool.query(`
      delete from nutrition
      where nutrition_id = $1
    `, [row])

    if ((await result).rowCount === 0) {
      return res.status(404).json({error: 'Item not found'})
    }

    res.json({message: 'Item deleted'})
  } 
  catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Server error' })
  }

}





