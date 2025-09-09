import { useState } from "react"



export default function FoodList(food) {
    console.log(food)
    const [isExpanded, setIsExpanded] = useState(false)
    let expanded = isExpanded ? 'expanded' : 'collapsed'
    
    return (
        <li key={food.nutrition_id} className='food-item'>
            <div className='food-item-div'>
                <button onClick={() => setIsExpanded(prev => !prev)}>{food.food_name}</button>
                <p>{food.calories} calories</p>
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
    )
}