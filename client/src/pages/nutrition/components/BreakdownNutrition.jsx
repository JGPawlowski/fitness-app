import BreakdownCard from "./BreakdownCard";


export default function NutritionBreakdown(props) {
    return (
        <div className='nutrition-container-left'>
            <h3>Breakdown</h3>

            <section className='nutrition-breakdown'>

                <BreakdownCard
                    title='Calories:'
                    calories={props.calories}
                    // goal={11}
                    description='Summary of calories for the day and how they relate to goal % or other metrics'
                 />

                 <BreakdownCard 
                    title='Macros:'
                    // carbs={props.carbs}
                    // protein={props.protein}
                    // fats={props.fats}
                    // sugar={props.sugar}
                    list={{carbs: props.carbs_grams, protein: props.protein_grams, fats: props.fat_grams, sugar: props.sugar_grams}}
                    description='Summary of macros for the day and how they relate to goal % or other metrics'
                 />
                 
                 <BreakdownCard 
                    title='Micros/Other:'
                    fiber={props.fiber}
                    description='Summary of micros/other for the day and how they relate to goal using % or other metrics'
                 />

            </section>

        </div>

    )
}