import { useState } from "react"


export default function EnterFoodForm({ submitFoodHandler }) {
    const [item, setItem] = useState('')
    const [mealTime, setMealTime] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        submitFoodHandler(
            { 
                food:item,
                meal:mealTime
            })
            setItem('')
            setMealTime('')
    }


    return (
            <form onSubmit={handleSubmit} className='food-form'>
                <h3 className='nutrition-container-h3'>Enter in a food or drink</h3>

                <select 
                className="select-meal" name='mealTime' onChange={(e) => setMealTime(e.target.value)} value={mealTime} required>
                    <option value={''}>Choose a meal type</option>
                    <option value={'breakfast'}>Breakfast</option>
                    <option value={'lunch'}>Lunch</option>
                    <option value={'dinner'}>Dinner</option>
                    <option value={'snack'}>Snack</option>
                </select>

                <input
                    value={item}
                    className='food-input'
                    onChange={(e) => setItem(e.target.value)}
                    type='text'
                    placeholder='e.g. 4 oz of chicken breast'
                    name='foodEntry'
                    aria-label='Add food or drink'
                    required
                />
                
                
                <button className='add-food-btn'>Add Item</button>
            </form> 



    )
}