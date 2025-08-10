import './nutrition-page.css'
import BreakdownNutrition from './components/BreakdownNutrition'
import InputNutrition from './components/InputNutrition'

export default function NutritionPage() {
    return (
        <main className='nutrition-main'>
            
            <h1>Nutrition Overview</h1>
            <div className='nutrition-container'>
                
                <BreakdownNutrition />
                <InputNutrition />
                
            </div>
 
        </main>
    )
}