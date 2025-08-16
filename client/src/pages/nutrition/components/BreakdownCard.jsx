


export default function BreakdownCard(props) {


    

    return (
        
        <div className='breakdown-item-card'>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            
            {props.calories ? <p>{props.calories}</p> : null}

            {props.macros ? 
            <ul>
                {Object.entries(props.macros).map(([key, value]) => (
                    <li key={key}>{key}: {value}</li>
                ))}

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