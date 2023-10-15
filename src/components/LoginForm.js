import React, { useState } from "react";
import './Form.css';
import SignUpModal from "./SignUpForm.js";

function LoginModal({ onClose, onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(email, password);
  };

  const openSignUpModal = () => {
    setShowSignUpModal(true);
  };

  const closeSignUpModal = () => {
    setShowSignUpModal(false);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h1 className="modal-content">Log in</h1>
        <form onSubmit={handleSubmit}>
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
          <p>Don't have an account? <u onClick={openSignUpModal}>Sign up</u></p>
          <button type="button1">Log in</button>
        </form>
        <button type="button2" onClick={onClose}>Close</button>
      </div>
      {showSignUpModal && <SignUpModal onClose={closeSignUpModal} onSumbmit={onSubmit} />}
    </div>
  );
}

export default LoginModal;


