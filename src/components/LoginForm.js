import React, { useState } from "react";
import './Form.css'
import SignUpModal from "./SignUpForm.js";
import Swal from 'sweetalert2';

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

    const data = {
      email: email,
      password: password
    };

    const loginUrl = 'https://urlservicio/login'; 

    fetch(loginUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          // La solicitud fue exitosa, muestra un mensaje de éxito
          Swal.fire('Success', 'Inicio de sesión exitoso', 'success');
          console.log("Inicio de sesión exitoso");
        } else {
          // La solicitud no fue exitosa, maneja el error y muestra un mensaje de error
          Swal.fire('Error', 'Inicio de sesión fallido', 'error');
          console.error("Error al iniciar sesión");
        }
      })
      .catch(error => {
        // Maneja los errores en caso de problemas de red u otros errores y muestra un mensaje de error
        Swal.fire('Error', 'Ocurrió un error inesperado', 'error');
        console.error(error);
      });
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


