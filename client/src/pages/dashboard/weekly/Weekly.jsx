import NutritionDash from "./NutritionDash";
import FitnessDash from "./FitnessDash";

import { useState, useEffect } from "react";



export default function Weekly(props) {

    const [isVisible, setIsVisible] = useState(true)
    const [totals, setTotals] = useState({})
    

        // test user and date for fetching data
    const user_id = 1
    const todaysDate = new Date().toLocaleDateString('en-CA') // format date and timezone 
    /** GET THE USER DATA FROM THE POSTGRES DATABASE **/
    useEffect(() => {
        async function getDB() {
            try {    
                const res = await fetch(`/api/nutrition/${user_id}?date=${todaysDate}`)   // call backend route
                // non 200 responses
                if (!res.ok) throw new Error("Network response was not ok")
                    
                const data = await res.json()
                setTotals(data.totals)

            } catch(err) {
                console.error(err)
            }
        }
        getDB()
    }, [user_id, todaysDate])


    const switchView = () => {
        setIsVisible(false)
        setTimeout(() => {
            props.onToggle()
            setIsVisible(true) // wait the timeout and switchback
        }, 250) // half of transition duration
    }

    const view = props.currentView === 'nutrition' ? 'Nutrition' : 'Fitness'

    
    return (
         <section className='weekly-stats-container'>
            <div className='stats-card' style={{opacity: isVisible ? 1 : 0}}>
                {
                    props.currentView === 'fitness' ?
                    <NutritionDash
                        calories={totals ? totals.total_calories : 0}
                        carbs={totals ? totals.total_carb : 0}
                        protein={totals ? totals.total_protein : 0}
                        fats={totals ? totals.total_fat : 0}
                        vitMin={75}
                        fiber={totals ? totals.total_fiber : 0}
                        sugar={totals ? totals.total_sugar : 0}
                        water={240}
                    /> :
                    <FitnessDash 
                        caloriesBurned={500}
                        steps={20000}
                        heartRate={80}
                        sleep={8}
                    /> 
                }
            </div>
        
            <button className='stats-btn' onClick={switchView} disabled={!isVisible}>
                {isVisible ? `See Weekly ${view}` : `Loading ${view}...` }
            </button>
        </section>
    )
}