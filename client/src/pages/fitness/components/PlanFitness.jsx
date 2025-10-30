import { useState } from "react"

import DaySchedule from "./DaySchedule"


export default function PlanFitness() {

    const today = new Date()
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    // state for day
    const [day, setday] = useState(days[today.getDay()]) 
    

    
    function dayData(day) {
        // use for showing the data for the correct day that is clicked
        // could set up the ability to set repeatable activities
        setday(day)
        // need to change how this works
    }

    function getBtns() {
        let dayBtns = days.map(dayName => (
            <button 
                key={dayName}
                style={dayName === day ? {backgroundColor: '#f15152', color:'white'} : null}
                onClick={() => dayData(`${dayName}`)}
             >{dayName}</button>
        ))

        return dayBtns
    }
    


    return (
        <div className='plan-fitness-main'>
            <div className='day-of-week-planning'>
                { getBtns() }
            </div> 

            <DaySchedule 
                day={day}
            /> 
        </div>
    )
}