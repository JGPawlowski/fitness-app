// // backend/controllers/nutritionController.js
// import fetch from 'node-fetch'

// export const searchFood = async (req, res) => {
  
//   try {
//     const { food } = req.query
//     if (!food) return res.status(400).json({ error: 'Food query is required' })

//     const response = await fetch(
//       `https://api.nal.usda.gov/fdc/v1/foods/search?query=${encodeURIComponent(food)}&pageSize=10&api_key=${process.env.USDA_API_KEY}`
//     );
//     const data = await response.json()
//     res.json(data)

//     // Filter for unbranded foods (Foundation / SR Legacy)
//     // const unbrandedFoods = data.foods.filter(
//     //   f => f.foods.dataType === 'Foundation' || f.foods.dataType === 'SR Legacy'
//     // )

//     // res.json(unbrandedFoods)
//   } catch (err) {
//     console.error(err)
//     res.status(500).json({ error: 'Server error' })
//   }
// }
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
