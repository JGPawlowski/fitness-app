import './nutrition-page.css'
import NutritionBreakdown from './components/NutritionBreakdown'
import InputNutrition from './components/InputNutrition'

import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'

export default function NutritionPage() {
    // if the recipe is showing or not --- will use whenever setting up useRef
    const [recipe, setRecipe] = useState(false)
    const [foodItem, setFoodItem] = useState('')
    const [mealTime, setMealTime] = useState('')
    const [apiData, setApiData] = useState(null) // fetch the data from the database
    const [foodLoaded, setFoodLoaded] = useState(false)
    const [test, setTest] = useState([])
    const [refreshTotal, setRefreshTotal] = useState(0)
    const [totals, setTotals] = useState({})
    const [rows, setRows] = useState([])
    const [nutrients, setNutrients] = useState({
        FoodName: '',
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
        
        /* GET THE FOOD DATA FROM THE NUTRITIONIX API --- USING THE FORM TO ENTER IN FOOD BEING EATEN IN A DAY */
        async function getFood() {

            try {
                const res = await fetch(`/api/nutrition/search?food=${foodItem}`)
                const data = await res.json()
                
                // set the nutrients and the amount
                setNutrients({
                    foodName: foodItem,
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

                setFoodLoaded(true)
                setTest(data[0])

            } catch(err) {
                console.log(err)
            }
        }

        getFood()
    }, [foodItem, mealTime])


    // test user
    const user_id = 1
    const todaysDate = new Date().toLocaleDateString("en-CA") // YYYY-MM-DD
    useEffect(() => {
        async function getDB() {
            try {
                const res = await fetch(`/api/nutrition/${user_id}?date=${todaysDate}`)

                if (!res.ok) throw new Error("Network response was not ok")

                const data = await res.json()
                setApiData(data) // save totals + user info
                setTotals(data.totals)
                setRows(data.rows)

            } 
                catch (err) {
                    console.error("Error fetching user data:", err)
                }
        }
        getDB()
    }, [user_id, todaysDate, refreshTotal])
       

    const handleRecipe = () => {
        setRecipe(prev => !prev)
    }

    const submitFoodHandler = ({food, meal}) => {
        setFoodItem(food)
        setMealTime(meal)
    }

    const submitToDB = async () => {
        try {
            // Build payload to match API
            const payload = {
                foodName: foodItem,  // send the current food item
                nutrients: {
                    Calories: nutrients.Calories,
                    Sugar: nutrients.Sugar,
                    Fiber: nutrients.Fiber,
                    Fats: nutrients.Fats,
                    Carbs: nutrients.Carbs,
                    Protein: nutrients.Protein,
                }
            }

            const res = await fetch("/api/nutrition/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            })

            const result = await res.json()
            console.log(result.message)

        } catch (err) {
            console.error(err)
        }

        // RESET STATES AFTER SUBMITTING THE FOOD ITEM
        setFoodItem('');
        setMealTime('');
        setNutrients({
            foodName: '',
            Calories: 0,
            Sugar: 0,
            Fiber: 0,
            Fats: 0,
            Carbs: 0,
            Protein: 0,
        })
        setFoodLoaded(false)
        setRefreshTotal(prev => prev + 1)
    }



    return (
        <div className='nutrition-main'>
            {/* &nbsp; adds space before the span */}
            <h1 className='breakdown-username'>Nutrition Overview for&nbsp;
                <Link to={'/user'}>
                    <span>{ apiData ? apiData.user.name : ''}</span>
                </Link>
            </h1>
            
            <div className='nutrition-container'>
                
                <NutritionBreakdown {...totals} foods={rows}/>
                <InputNutrition 
                    submitFoodHandler={submitFoodHandler} 
                    handleRecipe={handleRecipe}
                    foodLoaded={foodLoaded}
                    submitToDB={submitToDB}
                    nutrients={{...nutrients}}
                    foodItem={foodItem}
                    allData={test}
                    setFoodLoaded={setFoodLoaded}
                /> 
                
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