

export default function PlanFitness() {
    return (
        <div className='plan-fitness-main'>
            <div className='day-of-week-planning'>
                <button>Monday</button>
                <button>Tuesday</button>
                <button>Wednesday</button>
                <button>Thursday</button>
                <button>Friday</button>
                <button>Saturday</button>
                <button>Sunday</button> 
            </div>
            <p>After the day of the week is clicked, show a time schedule of what the plan is for the day</p>
            <p>Automatically start with the current day to be the button selected</p>
        </div>
    )
}