import React, { useState } from 'react'
import "../styles/Form.css"

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  return (
    <div>
        <form className='form-container'>
            <h1>Log In</h1>
            <input
                className='form-input' 
                type='text'
                placeholder='Username'
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
            />
            <input 
                className='form-input'
                type='password'
                placeholder='Password'
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
            />
            
            <button className='form-button' type='submit'>
                Log In
            </button>
            
        </form>
    </div>
  )
}

export default Login