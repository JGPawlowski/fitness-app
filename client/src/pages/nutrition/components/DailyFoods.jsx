
export default function DailyFoods({ foods }) {

    const foodItems = foods.map((food) => (
        <li key={food.nutrition_id}>{food.food_name}</li>
    ))

    return (
        <section className='breakdown-item-card'>
            <ul>
                {foodItems}
            </ul>
            <p>Show foods that have been eaten today</p>
            <p>Be able to select a food to get more of a breakdown of the food</p>
            <p>Delete or duplicate the food</p>
        </section>
    )
}