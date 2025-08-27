import EnterFoodForm from "./EnterFoodForm";
import GetRecipe from "./GetRecipe";
import SubFoodForm from './SubFoodForm'


export default function InputNutrition({ submitFoodHandler, foodLoaded, submitToDB, nutrients, foodItem, allData}) {

    return (
        <div className='nutrition-container-right'>

             { foodLoaded ? 
                // if there is food to be submitted to the database
                <SubFoodForm 
                    submitToDB={submitToDB}
                    nutrients={nutrients}
                    foodItem={foodItem.charAt(0).toUpperCase() + foodItem.slice(1)}
                    allData={allData}
                />
                    :
                // no food to be submitted --- enter a food
                <EnterFoodForm 
                    submitFoodHandler={submitFoodHandler}
                /> 
            
            }
            <GetRecipe />

        </div>
    )
}