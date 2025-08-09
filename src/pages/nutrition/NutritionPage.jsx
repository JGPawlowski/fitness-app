import './nutrition-page.css'

export default function NutritionPage() {
    return (
        <main className='nutrition-main'>

            <h1>Nutrition Overview</h1>
            <div className='nutrition-container'>
                <div className='nutrition-container-left'>
                    <h3>Breakdown</h3>

                    <section className='nutrition-breakdown'>

                        <div className='breakdown-item-card'>
                            <h4>Calories:</h4>
                            <p>Summary of calories for the day and how they relate to goal % or other metricbs</p>
                        </div>
                        
                        <div className='breakdown-item-card'>
                            <h4>Macros:</h4>
                            <p>Summary of macros for the day and how they relate to goal % or other metrics</p>
                        </div>
                        
                        <div className='breakdown-item-card'>
                            <h4>Micros/Other:</h4>
                            <p>Summary of micros/other for the day and how they relate to goal using % or other metrics</p>
                        </div>

                    </section>

                </div>

                <div className='nutrition-container-right'>
                   
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
                        <button>Add Item</button>
                    </form>

                    <section className='get-recipe'>
                        <h3>Get a recipe</h3>
                        <p>
                            Enter in ingriedients and type of diet a user is following (if applicable) and then return a recipe that could be made with the nutritional values included with it
                        </p>
                        <p>
                            Could do a quick add button to add these nutritional values to daily amount if the user makes the recipe
                        </p>
                    </section>

                </div>
            </div>
 
        </main>
    )
}