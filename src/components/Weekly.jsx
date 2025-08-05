

export default function Weekly(props) {
    
    return (
         <section className='weekly-stats-container'>
            <div className='stats-card'>
                {props.currentView === 'fitness' ? <h1>fit</h1> : <h1>nutrition</h1>}
            </div>
        
            <button onClick={props.onToggle}>Flip</button>
        </section>
    )
}