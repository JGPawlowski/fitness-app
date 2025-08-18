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
        if (!foodItem) return
        
        console.log(`${foodItem} at ${mealTime}`)
        
        // fetch(`/api/get-foods/search?food=apple`)
        //     .then((res) => res.json())
        //     .then((data) => console.log(data))
        //     .catch((err) => console.error(err))
        
        async function getFood() {
            try {
                
                const res = await fetch(`/api/get-foods/search?food=${foodItem}`)
                const data = await res.json()
                console.log(data)

                // data.foods.forEach(item => {
                //     console.log(item.foodNutrients.nutrientName)
                // })

                const nutrients = data.foods.map(item => item.foodNutrients)
                const test = nutrients[0]
                // console.log(test[0].nutrientName)
                console.log(nutrients)


            } catch(err) {
                console.log(err)
            }
        }

        getFood()
    },[foodItem, mealTime])

    // test user and date for fetching data
    const user_id = 1
    const today = new Date();
    const todaysDate = today.toLocaleDateString("en-CA"); // format date

    
    useEffect(() => {
        
        async function getDB() {
            try{
                
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

        useEffect(() => {
            console.log(apiData)
        }, [apiData])
       

    const handleRecipe = () => {
        setRecipe(prev => !prev)
    }

    const submitFoodHandler = ({food, meal}) => {
        setFoodItem(food)
        setMealTime(meal)
        // wont work because state is asynchronous
        // console.log(foodItem)
        // console.log(mealTime)
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