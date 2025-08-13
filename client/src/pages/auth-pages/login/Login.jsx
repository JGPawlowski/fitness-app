import './login.css'


export default function Login() {

    const getLogin = (formData) => {
        const username = formData.get('username')
        const password = formData.get('password')

        console.log(`${username} ${password}`)
    }


    return (
        <div className='login-main'>

            <form action={getLogin} className='login-container'>
                <label className='login-label'>Enter Username:</label>
                <input name='username' className='login-input' required/>

                <label className='login-label'>Enter Password:</label>
                <input name='password' className='login-input' required/>

                <button className='login-btn'>Submit</button>
            </form>

        </div>
    )
}