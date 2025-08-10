

export default function EnterFoodForm() {
    return (
        <>
            <h3>Enter in a food or drink</h3>
            <form /*action={addItem}*/ className='enter-food-form'>
                <select name='mealTime' required>
                    <option value={''}>Choose a meal type</option>
                    <option value={'breakfast'}>Breakfast</option>
                    <option value={'lunch'}>Lunch</option>
                    <option value={'dinner'}>Dinner</option>
                    <option value={'snack'}>Snack</option>
                </select>
                <input 
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