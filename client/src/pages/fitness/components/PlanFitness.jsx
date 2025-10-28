import { useState } from "react"


export default function PlanFitness() {

    // show the schedule / rendure the schedule component when it is made
    const [showDayData, setShowDayData] = useState(false)
    const [day, setday] = useState('Current Day')

    function dayData(day) {
        // use for showing the data for the correct day that is clicked
        // could set up the ability to set repeatable activities
        setday(day)
        // need to change how this works
        setShowDayData(prev => !prev)
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
            <h1>{day}</h1>

            { showDayData ? <h1>Showing...</h1> : <h1>Not Showing...</h1>}
        </div>
    )
}