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
    const [nutrients, setNutrients] = useState({
        Calories: 0,
        Sugar: 0,
        Fiber: 0,
        Fats: 0,
        Carbs: 0,
        Protein: 0,
    })

    
    useEffect(() => {
        // only continue if there is a food item entered in the form
        if (!foodItem) return

        
        // testing 
        console.log(`${foodItem} at ${mealTime}`)
        
        /* GET THE FOOD DATA FROM THE NUTRITIONIX API --- USING THE FORM TO ENTER IN FOOD BEING EATEN IN A DAY */
        async function getFood() {

            try {
                const res = await fetch(`/api/get-foods/search?food=${foodItem}`)
                const data = await res.json()

                console.log(data)
                
                // set the nutrients and the amount
                setNutrients({
                    Calories: 
                        data[0].nf_calories === null || data[0].nf_calories === undefined ?
                        0 : Math.floor(Number(data[0].nf_calories)),
                    Protein:
                        data[0].nf_protein === null || data[0].nf_protein === undefined ? 
                        0 : Number(data[0].nf_protein),
                    Carbs: 
                        data[0].nf_total_carbohydrate === null || data[0].nf_total_carbohydrate === undefined ?
                        0 : Number(data[0].nf_total_carbohydrate),
                    Fats:
                        data[0].nf_total_fat === null || data[0].nf_total_fat === undefined ? 
                        0 : Number(data[0].nf_total_fat),
                    Fiber:
                        data[0].nf_dietary_fiber === null || data[0].nf_dietary_fiber === undefined ?  
                        0 : Number(data[0].nf_dietary_fiber),
                    Sugar: 
                        data[0].nf_sugars === null || data[0].nf_sugars === undefined ? 
                        0 : Number(data[0].nf_sugars)
                })

            } catch(err) {
                console.log('here')
                console.log(err)
            }
        }

        getFood()
    }, [foodItem, mealTime])
    

    // test user and date for fetching data
    const user_id = 1
    const today = new Date()
    const todaysDate = today.toLocaleDateString("en-CA") // format date and timezone 

    
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
       

    const handleRecipe = () => {
        setRecipe(prev => !prev)
    }

    const submitFoodHandler = ({food, meal}) => {
        setFoodItem(food)
        setMealTime(meal)
    }

    const submitToDB = async () => {
        try {
            const res = await fetch("/api/nutrition/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nutrients })
            })
            const result = await res.json()
            console.log(result.message)
        } catch (err) {
            console.error(err)
        }


        /* RESET STATES AFTER SUBMITTING THE FOOD ITEM */
        setFoodItem('')
        setMealTime('')
        setApiData(null)
        setNutrients({
            Calories: 0,
            Sugar: 0,
            Fiber: 0,
            Fats: 0,
            Carbs: 0,
            Protein: 0,
        })

    }


    return (
        <div className='nutrition-main'>
            {/* &nbsp; adds space before the span */}
            <h1 className='breakdown-username'>Nutrition Overview for&nbsp;
                <span>{ apiData ? apiData.name : ''}</span>
            </h1>
            
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

            <button onClick={submitToDB}>Submit to the database</button>

        </div>
    )
}