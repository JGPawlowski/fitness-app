import './nutrition-page.css'
import BreakdownNutrition from './components/BreakdownNutrition'
import InputNutrition from './components/InputNutrition'

import { useState, useEffect } from 'react'

export default function NutritionPage() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/nutrition') // adjust port if needed
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.error(err));
    }, []);
    console.log(data)

    // if the recipe is showing or not --- will use whenever setting up useRef
    const [recipe, setRecipe] = useState(true)

    const handleRecipe = () => {
        setRecipe(prev => !prev)
    }

    return (
        <div className='nutrition-main'>
            
            <h1>Nutrition Overview</h1>
            
            <div className='nutrition-container'>
                
                <BreakdownNutrition />
                <InputNutrition handleRecipe={handleRecipe} /> {/* show the recipe */}
                
            </div>

            { recipe && (
                <section className='suggested-recipe-container' arial-live="polite">
                    <h2>Recipe Recommendation</h2>
                    <p>This section will only show when there is a recipe otherwise it will be taken out of the dom</p>
                </section>
            )}
 
        </div>
    )
}