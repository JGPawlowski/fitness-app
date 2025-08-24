


export default function SubFoodForm({ submitToDB, nutrients, foodItem }) {


    const handleDataSubmit = (event) => {
        event.preventDefault()
        submitToDB()
    }



    return (
        <form onSubmit={handleDataSubmit} className='food-form'>
            <h3 className='nutrition-container-h3'>Submit This Food</h3>
            
            <p>Calories: {nutrients.Calories}</p>

            <div className='nutrition-label'>
                <h2>{foodItem}</h2>

                <div className='label-header'>
                    <h4>Serving Size:</h4>
                    <span></span>
                </div>

            </div>


            <button className='add-food-btn'>Submit Food</button>
        </form>
    )
}