import './weekly-styles.css'

export default function Nutrition() {
    return (
        <>
            <h2>Weekly Nutrition Averages</h2>
            <div className="nutrition-stats-container">
                <ul className="nutrition-list">
                    <li><strong>Calories:</strong></li>

                    <li>
                    <strong>Macronutrients:</strong>
                    <ul>
                        <li>Carbs: g</li>
                        <li>Proteins: g</li>
                        <li>Fats: g</li>
                    </ul>
                    </li>

                    <li>
                    <strong>Micronutrients:</strong>
                    <ul>
                        <li>Vitamins & Minerals: </li>
                        <li>Fiber: g</li>
                        <li>Sugar: g</li>
                    </ul>
                    </li>

                    <li><strong>Water:</strong> oz</li>
                </ul> 
            </div>
        </>
    )
}