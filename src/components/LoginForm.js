import React, { useState } from "react";
import './Form.css';
import SignUpModal from "./SignUpForm.js";
import Swal from 'sweetalert2';
import axios from "axios";

function LoginModal({ onClose, onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar que ambos campos estén llenados
    if (email.trim() === '' || password.trim() === '') {
      // Si uno o ambos campos están vacíos, muestra un mensaje de error
      Swal.fire('Advertencia', 'Por favor complete todos los campos', 'warning');
      return; // Salir de la función para evitar la solicitud Ajax
    }

    const data = {
      email: email,
      password: password
    };

    console.log(data);

    axios({
      url: 'http://127.0.0.1:8001/login/',
      // http://auth-svc:8000/signup/
      // http://127.0.0.1:8001/login/
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
    }).then(response => {
        if (response.status === 200) {
          // La solicitud fue exitosa, muestra un mensaje de éxito
          Swal.fire('Success', 'Inicio de sesión exitoso', 'success');
          console.log("Inicio de sesión exitoso");
          setIsLoggedIn(true);
        } else {
          // La solicitud no fue exitosa, maneja el error y muestra un mensaje de error
          Swal.fire('Error', 'Inicio de sesión fallido', 'error');
          console.error("Error al iniciar sesión, verifique que su correo y contraseña sean correctos");
        }
      }).catch(error => {
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

  const isUserLoggedIn = () => {
    return isLoggedIn;
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h1>Log in</h1>
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



