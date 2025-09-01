import { useEffect, useRef } from "react"


export default function SubFoodForm({ submitToDB, nutrients, allData, setFoodLoaded }) {


    const handleDataSubmit = (event) => {
        event.preventDefault()
        submitToDB()
    }


    // after adding the food ---- focus on the button so user can look at food and then just add it by hitting enter
    const subBtnRef = useRef(null)
    useEffect(() => {
        subBtnRef.current.focus()
    }, [])



    return (
        <form onSubmit={handleDataSubmit} className='sub-food-form'>
            <h3>Add to Daily Nutrition</h3>

            <div className='nutrition-label'>
                    <h2>{nutrients.foodName}</h2>
                <div className='label-header'>
                    <h4>Serving Size: <span>{allData.serving_qty} {allData.serving_unit}</span></h4>
                    <h3>Total Calories: <span>{nutrients.Calories}</span></h3>
                </div>
                
                <div className='nutrition-label-data'>
                    <dt><strong>Fat:</strong></dt> 
                    <dd>{nutrients.Fats}</dd>
                </div>

                <div className='nutrition-label-data'>
                    <dt><strong>Sugar:</strong></dt> 
                    <dd>{nutrients.Sugar}</dd>
                </div>

                <div className='nutrition-label-data'>
                    <dt><strong>Carbs:</strong></dt>
                    <dd>{nutrients.Carbs}</dd>
                </div>

                <div className='nutrition-label-data'>
                    <dt><strong>Protein:</strong></dt>
                    <dd>{nutrients.Protein}</dd>
                </div>

            </div>

            <div className='sub-btn-div'>
                <button ref={subBtnRef} className='add-food-btn'>Submit Food</button>
                {/* may change how the cancel food button changes the state from g-parent */}
                <button className='cancel-sub-btn' onClick={() => setFoodLoaded(false)}>cancel</button>
            </div>
        </form>
    )
}