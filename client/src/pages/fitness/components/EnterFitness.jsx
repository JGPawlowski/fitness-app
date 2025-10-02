

export default function EnterFitness() {

    function subChoice() {
        console.log('choice selected')
    }




    return (

        <form onSubmit={subChoice} className='fitness-select-form'>
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
        
    )
}