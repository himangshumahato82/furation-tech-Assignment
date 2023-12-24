// LoginPage.js
import "./Login.css"
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username,
        password,
      });

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
       alert("login done ")
        
        navigate('home');
       
      } else {
       alert("Login failed")
        console.error('Login failed');
      }
    } catch (error) {
     
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
    <h1>LOGIN</h1>
    <p>username: 'kminchelle',
    password: '0lelplR',</p>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /> <br/>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br/>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
