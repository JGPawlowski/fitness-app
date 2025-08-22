


export default function SubFoodForm({ submitToDB, nutrients, foodItem }) {

    console.log(nutrients.Calories)

    const handleDataSubmit = (event) => {
        event.preventDefault()
        submitToDB()
    }



    return (
        <form onSubmit={handleDataSubmit} className='enter-food-form'>
            <h3 className='nutrition-container-h3'>Submit This Food</h3>
            <h3>{foodItem}</h3>
            <p>Calories: {nutrients.Calories}</p>


            <button className='add-food-btn'>Submit Food</button>
        </form>
    )
}