import React, { useState } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;

  .login-box {
    background-color: white;
    padding: 2rem;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    width: 100%;
    max-width: 400px;
  }

  .input-field {
    width: 100%;
    padding: 0.8rem;
    margin: 1rem 0;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  .submit-btn {
    width: 100%;
    padding: 0.8rem;
    background-color: #ff7eb3;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: #ff558c;
    }
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with', email, password);
  };

  return (
    <LoginContainer>
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            className="input-field"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="input-field"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>
      </div>
    </LoginContainer>
  );
};

export default Login;
