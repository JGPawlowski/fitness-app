import { useState } from "react"


export default function EnterFoodForm({ submitFoodHandler }) {
    const [item, setItem] = useState('')
    const [mealTime, setMealTime] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log(item)
        // console.log(mealTime)
        submitFoodHandler({food:item, meal:mealTime})
    }

    return (
        <>
            <h3>Enter in a food or drink</h3>
            <form onSubmit={handleSubmit} className='enter-food-form'>
                <select className="select-meal" name='mealTime' onChange={(e) => setMealTime(e.target.value)}required>
                    <option value={''}>Choose a meal type</option>
                    <option value={'breakfast'}>Breakfast</option>
                    <option value={'lunch'}>Lunch</option>
                    <option value={'dinner'}>Dinner</option>
                    <option value={'snack'}>Snack</option>
                </select>
                <input
                    className='food-input'
                    onChange={(e) => setItem(e.target.value)}
                    type='text'
                    placeholder='e.g. chicken'
                    name='foodEntry'
                    aria-label='Add food or drink'
                    />
                <button className='add-food-btn'>Add Item</button>
            </form>
        </>
    )
}