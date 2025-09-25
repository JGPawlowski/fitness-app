import './fitness-page.css'

export default function FitnessPage() {
    return (
        <div className='fitness-main'>
            <form className='fitness-select-div'>
                <label>Select a workout</label>
                <select>
                    <option>Running</option>
                    <option>Workout</option>
                    <option>Other</option>
                </select>
            </form>
        </div>
    )
}