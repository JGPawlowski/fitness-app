import EnterFoodForm from "./EnterFoodForm";
import GetRecipe from "./GetRecipe";


export default function InputNutrition({ submitFoodHandler }) {
    return (
        <div className='nutrition-container-right'>

            <EnterFoodForm 
                submitFoodHandler={submitFoodHandler} 
            /> 
            <GetRecipe />

        </div>
    )
}