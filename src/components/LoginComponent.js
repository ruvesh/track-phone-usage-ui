import React, {useState} from 'react'
import './componentStyles.css'

const LoginComponent = ({baseUrl}) =>{

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmitClick = (event) =>{
        event.preventDefault()
        alert(`${username} ${password}`)
    }

    return( 
        <div className="Login">
            
            <form 
            className="LoginForm"
            onSubmit={handleSubmitClick}>
                <h1>Sign In</h1>
                <input 
                type='text' 
                value={username} 
                onChange={event => setUsername(event.target.value)}/>
                <input 
                type='password' 
                value={password} 
                onChange={event => setPassword(event.target.value)}/>
                <button 
                className='Submit'
                type='submit'>Go</button>

                <div className='RegisterMessage'>
                    <p>Not a member yet? <strong><a href='#'>Sign Up</a></strong> today!</p>
                </div>
            </form>
            
        </div>
    )
}

export default LoginComponent