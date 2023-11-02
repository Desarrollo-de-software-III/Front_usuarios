import axios from "axios";
import React, { useState } from "react";
import Swal from 'sweetalert2';
import './Form.css';

function SignUpModal({ onClose }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    errors: {},
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};

    // Validación del campo username
    if (formData.username.trim() === "") {
      errors.username = "El nombre de usuario es requerido";
    }

    // Validación del campo email
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      errors.email = "El correo electrónico no es válido";
    }

    // Validación del campo password
    if (formData.password.trim() === "") {
      errors.password = "La contraseña es requerida";
    } else if (formData.password.length < 8) {
      errors.password = "La contraseña debe tener al menos 8 caracteres";
    }

    setFormData({ ...formData, errors });

    return Object.keys(errors).length === 0; // Retorna true si no hay errores
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Validación exitosa, procede con la solicitud POST
      Swal.fire({
        title: 'Confirmar registro',
        text: '¿Estás seguro de que deseas enviar estos datos?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          const userData = { username: formData.username, email: formData.email, password: formData.password };
          console.log(userData);

          axios({
            url: "http://users-svc.question-answer.svc.cluster.local:8000/users/create/",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            data: userData,
          }).then((response) => {
            if (response.status === 201) {
              Swal.fire('¡Registro exitoso!', '', 'success');
            } else {
              Swal.fire('Error en el registro', '', 'error');
            }
          }).catch((error) => {
            console.log(error)
            Swal.fire('Error en la solicitud', '', 'error');
          });

        }
      });
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h1>Sign up</h1>
        <form>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
          />
          {formData.errors.username && <p className="error">{formData.errors.username}</p>}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {formData.errors.email && <p className="error">{formData.errors.email}</p>}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {formData.errors.password && <p className="error">{formData.errors.password}</p>}
          <button type="button1" onClick={handleSignUp}>Sign up</button>
        </form>
        <button type="button2" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default SignUpModal;









