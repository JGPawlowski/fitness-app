import { useState, useEffect } from "react";
import BreakdownCard from "./BreakdownCard";



export default function NutritionBreakdown(props) {
    const [hasData, setHasData] = useState(false)

    useEffect(() => {

        setTimeout(() => {
            setHasData(prev => !prev)
        }, 350)

    }, [props.data])

    const [isExpanded, setIsExpanded] = useState(false)
    let expanded = isExpanded ? 'expanded' : 'collapsed'


    // get and display the food items from the db
     const foodItems = props.foods.map((food) => (
        <li key={food.nutrition_id} className='food-item'>
            <div className='food-item-div'>
                <button onClick={() => setIsExpanded(prev => !prev)}>{food.food_name}</button>
                <p>calories</p>
            </div>
            <div className={`${expanded}`}>
                <p style={{color: 'white'}}>Putting the rest of the nutritional values in here</p>
                <ul style={{color: 'white'}}>
                    <li>Carbs: {food.carbs}</li>
                    <li>Protein: {food.protein}</li>
                    <li>Fats: {food.fat}</li>
                    <li>Sugar: {food.sugar}</li>
                    <li>Fiber: {food.fiber}</li>
                </ul>
                
                <button onClick={() => setIsExpanded(prev => !prev)} className='expand-food-item-btn'>here</button>
            </div>
        </li>
    ))


    return (
        <div className='nutrition-container-left'>
            {/* <h3 className='nutrition-container-h3'>Breakdown</h3>  */}

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
                        <ul>
                            {foodItems}
                        </ul>
                        <p>Show foods that have been eaten today</p>
                        <p>Be able to select a food to get more of a breakdown of the food</p>
                        <p>Delete or duplicate the food</p>
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