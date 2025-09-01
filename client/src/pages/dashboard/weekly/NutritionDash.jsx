import './weekly-styles.css'

export default function Nutrition(props) {
    return (
        <>
            <h2>Weekly Nutrition Averages</h2>
            <div className="nutrition-stats-container">
                <ul className="nutrition-list">
                    <li><strong>Calories:</strong> {props.calories}</li>

                    <li>
                    <strong>Macronutrients:</strong>
                    <ul>
                        <li>Carbs: {props.carbs}g</li>
                        <li>Proteins: {props.protein}g</li>
                        <li>Fats: {props.fats}g</li>
                    </ul>
                    </li>

                    <li>
                    <strong>Micronutrients:</strong>
                    <ul>
                        <li>Vitamins & Minerals: {props.vitMin}</li>
                        <li>Fiber: {props.fiber}g</li>
                        <li>Sugar: {props.sugar}g</li>
                    </ul>
                    </li>

                    <li><strong>Water:</strong> {props.water}oz</li>
                </ul> 
            </div>
        </>
    )
}