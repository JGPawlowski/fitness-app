import './header.css'

export default function Header() {
    return (
        <header>
            <h1>The Fitness App</h1>
            <div className='info-box'>
                <p>some link</p>
                <p>some link</p>
                <p>some link</p>
                <img className='user-icon' src='/src/assets/user-line.svg' alt='user-icon'/>
            </div>
        </header>
    )
}