import React, { useState } from "react";
import './Form.css';
import Swal from 'sweetalert2';

function SignUpModal({ onClose }) {
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

  const handleSignUp = () => {
    // Muestra un cuadro de diálogo de confirmación
    Swal.fire({
      title: 'Confirmar registro',
      text: '¿Estás seguro de que deseas enviar estos datos?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        const userData = {
          username: username,
          email: email,
          password: password,
        };
        console.log(userData)

        // Realiza la solicitud POST a la url del servicio de registro de usuarios.
        fetch("https://urlservicio/registro", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((response) => {
            if (response.ok) {
              // El registro fue exitoso. Muestra un mensaje de éxito.
              Swal.fire('¡Registro exitoso!', '', 'success');
            } else {
              // El registro falló. Muestra un mensaje de error.
              Swal.fire('Error en el registro', '', 'error');
            }
          })
          .catch((error) => {
            // Muestra un mensaje de error en caso de error en la solicitud.
            Swal.fire('Error en la solicitud', '', 'error');
          });
      }
    });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h1 className="modal-content">Sign up</h1>
        <form>
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
          <button type="button1" onClick={handleSignUp}>Sign up</button>
        </form>
        <button type="button2" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default SignUpModal;






