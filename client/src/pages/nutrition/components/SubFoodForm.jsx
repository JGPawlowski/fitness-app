


export default function SubFoodForm({ submitToDB, nutrients, foodItem }) {


    const handleDataSubmit = (event) => {
        event.preventDefault()
        submitToDB()
    }



    return (
        <form onSubmit={handleDataSubmit} className='sub-food-form'>
            <h3>Submit This Food</h3>
            <h2>{foodItem}</h2>
            

            <div className='nutrition-label'>

                <div className='label-header'>
                    <h4>Serving Size:</h4>
                    <h2>Total Calories: <span>{nutrients.Calories}</span></h2>
                </div>
                
                <div className='nutrition-label-data'>
                    <p><strong>Fat:</strong></p> 
                    <p>15</p>

                    {/* <dt><strong>Fat:</strong></dt> 
                    <dd>15</dd> */}

                    {/* <p><strong>Carbs:</strong></p> 
                    <p><strong>Sugar:</strong></p>
                    <p><strong>Protein:</strong></p> */}
                </div>
                <div className='nutrition-label-data'>
                    <p><strong>Sugar:</strong></p> 
                    {/* <p><strong>Carbs:</strong></p> 
                    <p><strong>Sugar:</strong></p>
                    <p><strong>Protein:</strong></p> */}
                </div>

            </div>


            <button className='add-food-btn'>Submit Food</button>
        </form>
    )
}