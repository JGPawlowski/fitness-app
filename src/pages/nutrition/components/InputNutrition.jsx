import EnterFoodForm from "./EnterFoodForm";


export default function InputNutrition() {
    return (
        <div className='nutrition-container-right'>

            <EnterFoodForm /> 

            <section className='get-recipe'>
                <h3>Get a recipe</h3>
                <p>
                    Enter in ingriedients and type of diet a user is following (if applicable) and then return a recipe that could be made with the nutritional values included with it
                </p>
                <p>
                    Could do a quick add button to add these nutritional values to daily amount if the user makes the recipe
                </p>
                <p>
                    Make a section underneath the nutrition container to display the recipe, useRef to auto scroll when it loads in
                </p>
            </section>

        </div>
    )
}