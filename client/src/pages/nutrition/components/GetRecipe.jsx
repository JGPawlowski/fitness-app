import { useState } from "react"
import { nanoid } from 'nanoid'



export default function GetRecipe() {

    // ingredients array to store what they user has for a recipe --- starts off empty until user adds in ingredients
    const [ingredients, setIngredients] = useState([])

    // add ingredients to the array of what the user has
    const addIngredient = (formData) => {
        const newIngredient = formData.get('ingredient')
        // non empty string and no dupicates
        if (newIngredient && !ingredients.includes(newIngredient)) {
            setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        }
    }

    const ingredientsListItems = ingredients.map(ingredient => (
        <li className='ingredient-item' key={nanoid()}>
            {ingredient}
        </li>
    ))


    return (
        <section className='get-recipe'>
            <h3 className='nutrition-container-h3'>Get a recipe</h3>

            {/*action doesnt change the url and onSubmit does when using forms*/}
            <form action={addIngredient} className='ingredients-form'>
                <label className='ingredients-label'>Give me the ingredients you have and I will give you back a recipe!</label>
                <div className='ingredient-input-row'>
                    <input 
                        className='ingredient-input'
                        placeholder='e.g. oregano'
                        name='ingredient'
                        aria-label='Add an ingredient'
                    />
                    <button type='submit' className='ingredient-btn'>+ Add Ingredient</button>
                </div>

            </form>

            {/* display the ingredients that the user entered */}
            { ingredients.length > 0 &&
                <>
                    <h3 style={{marginBottom: '0px'}}>Ingredients on hand:</h3>
                    <ul className='ingredients-list' aria-live='polite'>
                        {ingredientsListItems}
                    </ul>
                </>
            }
            


            {/* give the ability to submit ingredients once there is enough ingredients in the array */}
            {
                ingredients.length > 3 &&
                <button className='sub-ingredients-btn'>Submit Ingredients</button>
            }
            
        </section>
    )
}