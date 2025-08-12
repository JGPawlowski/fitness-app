import BreakdownCard from "./BreakdownCard";


export default function NutritionBreakdown() {
    return (
        <div className='nutrition-container-left'>
            <h3>Breakdown</h3>

            <section className='nutrition-breakdown'>

                <BreakdownCard
                    title='Calories:'
                    total={5}
                    goal={11}
                    description='Summary of calories for the day and how they relate to goal % or other metrics'
                 />

                 <BreakdownCard 
                    title='Macros:'
                    total={5}
                    description='Summary of macros for the day and how they relate to goal % or other metrics'
                 />
                 
                 <BreakdownCard 
                    title='Micros/Other:'
                    total={5}
                    description='Summary of micros/other for the day and how they relate to goal using % or other metrics'
                 />

            </section>

        </div>

    )
}