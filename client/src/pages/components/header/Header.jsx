import { Link } from "react-router-dom"

import './header.css'

export default function Header() {
    return (
        <header>
            <h1 className='site-name'>
                <Link to={'/'}>The Fitness App</Link>
            </h1>

            <div className='info-box'>
                <Link to={'/'}>Home</Link>
                <Link to={"/nutrition"}>Nutrition</Link>
                <Link to={'/progress-history'}>Overview</Link>
                <Link to={'/fitness'}>Fitness</Link>
                <Link to={'/user'}> {/* will link this to an individual users page later on */}
                    <img className='user-icon' src='/src/assets/user-line.svg' alt='user-icon'/>
                </Link>
            </div>
        </header>
    )
}