import { useState } from "react";

import Nutrition from "./Nutrition";
import Fitness from "./Fitness";


export default function Weekly(props) {

    const [isVisible, setIsVisible] = useState(true)

    const switchView = () => {
        setIsVisible(false)
        setTimeout(() => {
            props.onToggle()
            setIsVisible(true) // wait the timeout and switchback
        }, 250) // half of transition duration
    }

    const view = props.currentView === 'fitness' ? 'Nutrition' : 'Fitness'

    
    return (
         <section className='weekly-stats-container'>
            <div className='stats-card' style={{opacity: isVisible ? 1 : 0}}>
                {
                    props.currentView === 'fitness' ?
                    <Fitness 
                        caloriesBurned={500}
                        steps={20000}
                        heartRate={80}
                        sleep={8}
                    /> : 
                    <Nutrition
                        calories={3200}
                        carbs={100}
                        proteins={80}
                        fats={120}
                        vitMin={75}
                        fiber={65}
                        sugar={26}
                        water={240}
                    />
                }
            </div>
        
            <button className='stats-btn' onClick={switchView} disabled={!isVisible}>
                {isVisible ? `See Weekly ${view}` : `Loading ${view}...` }
            </button>
        </section>
    )
}