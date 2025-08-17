// backend/controllers/nutritionController.js
import fetch from 'node-fetch'

export const searchFood = async (req, res) => {
  try {
    const { food } = req.query;
    if (!food) return res.status(400).json({ error: 'Food query is required' });

    const response = await fetch(
      `https://api.nal.usda.gov/fdc/v1/foods/search?query=${encodeURIComponent(food)}&pageSize=10&api_key=${process.env.USDA_API_KEY}`
    );
    const data = await response.json();

    // Filter for unbranded foods (Foundation / SR Legacy)
    const unbrandedFoods = data.foods.filter(
      f => f.dataType === 'Foundation' || f.dataType === 'SR Legacy'
    );

    res.json(unbrandedFoods);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};