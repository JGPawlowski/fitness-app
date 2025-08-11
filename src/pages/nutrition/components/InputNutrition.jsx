import EnterFoodForm from "./EnterFoodForm";
import GetRecipe from "./GetRecipe";


export default function InputNutrition() {
    return (
        <div className='nutrition-container-right'>

            <EnterFoodForm /> 
            <GetRecipe />

        </div>
    )
}