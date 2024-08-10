import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     if (email === 'test@test.com' && password === 'password') {
  //       localStorage.setItem('authToken', '12345');
  //       navigate('/dashboard');
  //     } else {
  //       alert('Invalid credentials');
  //     }
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }
    if (email === 'test@test.com' && password === 'password') {
      localStorage.setItem('authToken', '12345');
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className='login-container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className='login-form'>
        <div className='form-group'>
          <label>Email:</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>Password:</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit' className='submit-btn'>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
