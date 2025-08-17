import { useState, useEffect } from "react";
import BreakdownCard from "./BreakdownCard";


export default function NutritionBreakdown(props) {
    const [hasData, setHasData] = useState(false)



    useEffect(() => {

        setTimeout(() => {
            setHasData(prev => !prev)
        }, 3000)

    }, [props.data])



    return (
        <div className='nutrition-container-left'>
            <h3>Breakdown</h3>

            <section className='nutrition-breakdown'>
                {hasData ? 
                <>
                    <BreakdownCard
                        title='Calories:'
                        calories={props.calories}
                        // goal={11}
                        description='Summary of calories for the day and how they relate to goal % or other metrics'
                        />

                    <BreakdownCard 
                        title='Macros:'
                        macros={{
                                carbs: props.carbs_grams,
                                protein: props.protein_grams,
                                fats: props.fat_grams,
                                sugar: props.sugar_grams
                            }}
                        description='Summary of macros for the day and how they relate to goal % or other metrics'
                        />
                    
                    <BreakdownCard 
                        title='Micros/Other:'
                        fiber={props.fiber}
                        description='Summary of micros/other for the day and how they relate to goal using % or other metrics'
                        /> 
                </> : <h3>Loading Nutrition Data...</h3>
}
            </section>

        </div>

    )
}