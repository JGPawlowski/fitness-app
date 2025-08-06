import './header.css'

export default function Header() {
    return (
        <header>
            <h1>The Fitness App</h1>
            <div className='info-box'>
                <p>some link</p>
                <p>some link</p>
                <p>some link</p>
                <a href='http://www.google.com'> {/* will link this to a users page later on */}
                    <img className='user-icon' src='/src/assets/user-line.svg' alt='user-icon'/>
                </a>
            </div>
        </header>
    )
}