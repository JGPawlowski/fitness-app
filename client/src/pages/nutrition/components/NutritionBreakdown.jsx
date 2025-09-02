import { useState, useEffect } from "react";
import BreakdownCard from "./BreakdownCard";
import DailyFoods from "./DailyFoods";


export default function NutritionBreakdown(props) {
    const [hasData, setHasData] = useState(false)

    useEffect(() => {

        setTimeout(() => {
            setHasData(prev => !prev)
        }, 350)

    }, [props.data])


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
                                sugar: props.total_sugar
                            }}
                        description='Summary of macros for the day and how they relate to goal % or other metrics'
                    />
                    
                    {/* <BreakdownCard 
                        title='Micros/Other:'
                        fiber={props.total_fiber}
                        description='Summary of micros/other for the day and how they relate to goal using % or other metrics'
                    />  */}

                    <DailyFoods foods={props.foods} />
                    
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