

export default function Fitness(props) {
    return (
        <>
            <h2>Weekly Fitness Averages</h2>
            <div className="fitness-stats-container">
                <ul>
                    <li>Calories Burned: {props.caloriesBurned}</li>
                    <li>Steps: {props.steps}</li>
                    <li>Heart Rate: {props.heartRate}bpm</li>
                    <li>Sleep Per Night: {props.sleep} hours</li>
                </ul>
            </div>
        </>
    )
}