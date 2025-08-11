import './nutrition-page.css'
import BreakdownNutrition from './components/BreakdownNutrition'
import InputNutrition from './components/InputNutrition'

import { useState } from 'react'

export default function NutritionPage() {
    // if the recipe is showing or not --- will use whenever setting up useRef
    const [recipe, setRecipe] = useState(true)

    const handleRecipe = () => {
        setRecipe(prev => !prev)
    }

    return (
        <main className='nutrition-main'>
            
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
 
        </main>
    )
}