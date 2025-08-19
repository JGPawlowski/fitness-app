import './nutrition-page.css'
import BreakdownNutrition from './components/BreakdownNutrition'
import InputNutrition from './components/InputNutrition'

import { useState, useEffect } from 'react'

export default function NutritionPage() {
    // if the recipe is showing or not --- will use whenever setting up useRef
    const [recipe, setRecipe] = useState(true)
    const [foodItem, setFoodItem] = useState('')
    const [mealTime, setMealTime] = useState('')
    const [apiData, setApiData] = useState(null) // fetch the data from the database

    
    useEffect(() => {
        // only continue if there is a food item entered in the form
        if (!foodItem) return

        
        // testing 
        console.log(`${foodItem} at ${mealTime}`)
        
        /* GET THE FOOD DATA FROM THE USDA API --- USING THE FORM TO ENTER IN FOOD BEING EATEN IN A DAY */
        async function getFood() {
            try {
                const res = await fetch(`/api/get-foods/search?food=${foodItem}`)
                const data = await res.json()
                console.log(data)

                // get the nutrient and the amount
                // prep to send to the database (work on more efficient way to achieve this or a way to separate this out)
                for (const food of data.foods) {
                    for (const nutrient of food.foodNutrients) {
                        if (nutrient.nutrientName === 'Protein') {
                            console.log(`${nutrient.nutrientName}: ${nutrient.nutrientNumber}${nutrient.unitName}`)
                        }
                    }
                }


            } catch(err) {
                console.log(err)
            }
        }

        getFood()
    },[foodItem, mealTime])

    // test user and date for fetching data
    const user_id = 1
    const today = new Date();
    const todaysDate = today.toLocaleDateString("en-CA"); // format date and timezone 

    
    /** GET THE USER DATA FROM THE POSTGRES DATABASE **/
    useEffect(() => {
        async function getDB() {
            try {    
                const res = await fetch(`/api/nutrition/${user_id}?date=${todaysDate}`)   // call backend route
                // non 200 responses
                if (!res.ok) throw new Error("Network response was not ok")
                    
                const data = await res.json()
                setApiData(data)

            } catch(err) {
                console.error(err)
            }
        }
        getDB()
        }, [user_id, todaysDate]); 


        /** TESTING **/
        useEffect(() => {
            console.log(apiData)
        }, [apiData])
       

    const handleRecipe = () => {
        setRecipe(prev => !prev)
    }

    const submitFoodHandler = ({food, meal}) => {
        setFoodItem(food)
        setMealTime(meal)
    }


    return (
        <div className='nutrition-main'>
            
            <h1>Nutrition Overview {apiData ? `for ${apiData.name}` : ''}</h1>
            
            <div className='nutrition-container'>
                
                <BreakdownNutrition {...apiData} />
                <InputNutrition submitFoodHandler={submitFoodHandler} handleRecipe={handleRecipe} /> {/* show the recipe */}
                
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