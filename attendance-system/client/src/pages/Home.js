import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/Home.css"
import "../service.js"
import service from '../service.js';

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        service.logout();
        navigate("/");
    };
  return (
    <div className="container">
        <div className="content">
            <h2>Welcome! 😊</h2>
            <p>We're thrilled to have you back! Let's make today a fantastic learning adventure. 🎉</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    </div>
  )
}

export default Home
