import React, { useState } from 'react'
import "../styles/Form.css"
import { useNavigate } from 'react-router-dom';
import '../service.js';
import service from '../service.js';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await service.login(username, password);
            navigate("/home");
        } catch (err) {
            setError("Invalid username or password");
        }
    };
  return (
    <div>
        <form className='form-container' onSubmit={handleLogin}>
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
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button className='form-button' type='submit'>
                Log In
            </button>
            
        </form>
    </div>
  )
}

export default Login