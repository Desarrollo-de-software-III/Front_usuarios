import React, { useState } from "react";
import './Pregunta.css';
import Swal from 'sweetalert2';
import axios from "axios";

function PreguntaModal({ onClose, onSubmit }) {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [showPreguntaModal, setShowPreguntaModal] = useState(false);

  const handleTituloChange = (event) => {
    setTitulo(event.target.value);
  };

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar que ambos campos estén llenados
    if (titulo.trim() === '' || descripcion.trim() === '') {
      // Si uno o ambos campos están vacíos, muestra un mensaje de error
      Swal.fire('Advertencia', 'Por favor complete todos los campos', 'warning');
      return; 
    }

    const data = {
      titulo: titulo,
      descripcion: descripcion
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

  const closePreguntaModal = () => {
    setShowPreguntaModal(false);
  };

  return (
    <div className="pregunta">
      <div className="pregunta-content">
        <h1>Envia tu pregunta</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="titulo"
            placeholder="Título"
            value={titulo}
            onChange={handleTituloChange}
          />
          <textarea
            type="descripcion"
            placeholder="Descripción"
            value={descripcion}
            onChange={handleDescripcionChange}
          />
          <button type="button1">Send</button> 
        </form>
        <button type="button2" onClick={onClose}>Close</button> 
      </div>
      {showPreguntaModal && <PreguntaModal onClose={closePreguntaModal} onSumbmit={onSubmit} />}
    </div>
  );
}

export default PreguntaModal;