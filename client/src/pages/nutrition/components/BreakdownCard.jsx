import { useState, useEffect } from "react"


export default function BreakdownCard(props) {

    const [calories, setCalories] = useState(props.calories ?? 0)
    const [macros, setMacros] = useState(props.macros ?? {})


    /* SYNC THIS STATE WITH THE STATE FROM ABOVE (AND FROM THE DATABASE) */
    useEffect(() => {
        setCalories(props.calories)
    }, [props.calories])

    useEffect(() => {
        setMacros(props.macros)
    }, [props.macros])
    

    return (
        
        <div className='breakdown-item-card'>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            
            {calories ? <p>Calories: {calories}</p> : null}

            { macros ? 
            <ul>

                <li>Carbs: {macros.carbs}</li>
                <li>Protein: {macros.protein}</li>
                <li>Fats: {macros.fats}</li>
                <li>Sugar: {macros.sugar}</li>

            </ul> : null
            }
            
            
            {
                // conditional rendering to only display if there is a goal set for this specific category
            props.goal ? 
                <p>This is {(parseFloat(props.total / props.goal)*100).toFixed(1)}% of your daily goal</p> : null
            }
        </div>

    )
}