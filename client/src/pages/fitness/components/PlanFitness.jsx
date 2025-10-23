import { useState } from "react"


export default function PlanFitness() {

    // show the schedule / rendure the schedule component when it is made
    const [showDayData, setShowDayData] = useState(false)

    function dayData(day) {
        console.log(day)
    }

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    let dayBtns = days.map(day => (
        <button key={day} onClick={() => dayData(`${day}`)}>{day}</button>
    ))


    return (
        <div className='plan-fitness-main'>
            <div className='day-of-week-planning'>
                {/* <button onClick={() => dayData('monday')}>Monday</button>
                <button onClick={() => dayData('tuesday')}>Tuesday</button>
                <button onClick={() => dayData('wednesday')}>Wednesday</button>
                <button onClick={() => dayData('thursday')}>Thursday</button>
                <button onClick={() => dayData('friday')}>Friday</button>
                <button onClick={() => dayData('saturday')}>Saturday</button>
                <button onClick={() => dayData('sunday')}>Sunday</button>  */}
                { dayBtns }
            </div> 
            <p>After the day of the week is clicked, show a time schedule of what the plan is for the day</p>
            <p>Automatically start with the current day to be the button selected</p>

            { showDayData && <h1>Showing...</h1> }
        </div>
    )
}