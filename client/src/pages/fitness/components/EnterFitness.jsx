

export default function EnterFitness() {

    function subChoice(formData) {
        const workout = formData.get('workout-type')
        console.log(workout)
    }




    return (

        <form action={subChoice} className='fitness-select-form'>

            <label className='workout-select-label'>Select a workout</label>
            <select className='workout-select' id='workout-type' name='workout-type' defaultValue=''>
                <option value='' disabled>Select a workout</option>
                <option value='endurance'>Endurance</option>
                <option value='strength'>Strength</option>
                <option value='other'>Other</option>
            </select>
            
            <button className='workout-form-btn'>Enter</button>
        </form>

    )
}