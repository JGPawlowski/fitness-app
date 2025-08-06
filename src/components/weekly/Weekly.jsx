import Nutrition from "./Nutrition";
import Fitness from "./Fitness";


export default function Weekly(props) {
    
    return (
         <section className='weekly-stats-container'>
            <div className='stats-card'>
                {
                    props.currentView === 'fitness' ?
                    <Fitness /> : <Nutrition />
                }
            </div>
        
            <button onClick={props.onToggle}>Flip</button>
        </section>
    )
}