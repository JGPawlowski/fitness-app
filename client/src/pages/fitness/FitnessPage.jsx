import './fitness-page.css'

export default function FitnessPage() {
    function subChoice() {
        console.log('choice selected')
    }

    return (
        <div className='fitness-main'>
            <h1>Fitness</h1>

            <form onSubmit={subChoice} className='fitness-select-div'>
                <label>Select a workout</label>
                <select>
                    <option>Running</option>
                    <option>Workout</option>
                    <option>Other</option>
                </select>
                <label>Length</label>
                <input required></input>
                
                <button>Enter</button>
            </form>

        </div>
    )
}