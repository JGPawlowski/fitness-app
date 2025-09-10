import { useState, useEffect } from "react"
import BreakdownCard from "./BreakdownCard"
import FoodList from "./FoodList"


export default function NutritionBreakdown(props) {
    const [hasData, setHasData] = useState(false)

    useEffect(() => {

        setTimeout(() => {
            setHasData(prev => !prev)
        }, 350)

    }, [props.data])



    // get and display the food items from the db
     const foodItems = props.foods.map((food) => (
            <FoodList
                key={food.nutrition_id}
                {...food}
            />
    ))


    return (
        <div className='nutrition-container-left'>

            <section className='nutrition-breakdown'>
                { hasData ? 
                <>
                    <BreakdownCard
                        title='Calories:'
                        calories={props.total_calories}
                        // goal={11}
                        description='Summary of calories for the day and how they relate to goal % or other metrics'
                    />

                    <BreakdownCard 
                        title='Macros:'
                        macros={{
                                carbs: props.total_carbs,
                                protein: props.total_protein,
                                fats: props.total_fat,
                                sugar: props.total_sugar,
                                fiber: props.total_fiber
                            }}
                        description='Summary of macros for the day and how they relate to goal % or other metrics'
                    />

                    {/* Be able to delete and expand foods for a day */}
                     <section className='breakdown-item-card'>
                        <ul className='foods-list'>
                            {foodItems}
                        </ul>
                    </section>
                    
                </> : 
                // loading data
                <section className='breakdown-item-card'>
                    <h3>Loading Nutrition Data...</h3>
                </section>

}
            </section>

        </div>

    )
}