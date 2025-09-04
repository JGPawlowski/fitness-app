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
            
            { calories ? <p>Calories: {calories}</p> : null}

            { macros ? 
            <ul>

                <li>Carbs: {macros.carbs ? macros.carbs : 0}</li>
                <li>Protein: {macros.protein ? macros.protein : 0}</li>
                <li>Fats: {macros.fats ? macros.fats : 0}</li>
                <li>Sugar: {macros.sugar ? macros.sugar : 0}</li>
                <li>Fiber: {macros.fiber ? macros.fiber : 0} </li>

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