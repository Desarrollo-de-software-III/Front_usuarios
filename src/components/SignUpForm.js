import React, { useState } from "react";
import './Form.css'

function SignUpModal({ onClose, onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(username, email, password);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h1 className="modal-content">Sign up</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="username"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit">Sign up</button>
        </form>
        <button type="button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default SignUpModal;

