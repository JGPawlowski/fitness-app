import './fitness-page.css'

import EnterFitness from './components/EnterFitness'
import DisplayFitness from './components/DisplayFitness'

export default function FitnessPage() {

    return (
        <div className='fitness-main'>
            <DisplayFitness />

            <div className='fitness-bottom'>
                {/* testing */}
                <EnterFitness />
                <EnterFitness />
            </div>

        </div>
    )
}