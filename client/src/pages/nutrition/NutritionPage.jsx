import './nutrition-page.css'
import BreakdownNutrition from './components/BreakdownNutrition'
import InputNutrition from './components/InputNutrition'

import { useState, useEffect } from 'react'

export default function NutritionPage() {
    // if the recipe is showing or not --- will use whenever setting up useRef
    const [recipe, setRecipe] = useState(true)
    const [data, setData] = useState(null) // fetch the data from the database

    // test user and date for fetching data
    const user_id = 1
    const todaysDate = new Date().toISOString().split('T')[0];

    
    useEffect(() => {
        fetch(`/api/nutrition/${user_id}?date=${todaysDate}`)   // 🔑 calls backend route
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.error(err));
        }, [user_id, todaysDate]); 

        console.log(data)
       
       

    const handleRecipe = () => {
        setRecipe(prev => !prev)
    }

    return (
        <div className='nutrition-main'>
            
            <h1>Nutrition Overview {data ? `for ${data.name}` : ''}</h1>
            
            <div className='nutrition-container'>
                
                <BreakdownNutrition {...data} />
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