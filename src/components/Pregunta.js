import React, { useState } from "react";
import './Pregunta.css';
import Swal from 'sweetalert2';
import axios from "axios";

function PreguntaModal({ onClose, onSubmit }) {
  const [titulo, setTitulo] = useState('');
  const [description, setDescripcion] = useState('');
  const [showPreguntaModal, setShowPreguntaModal] = useState(false);

  const handleTituloChange = (event) => {
    setTitulo(event.target.value);
  };

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (titulo.trim() === '' || description.trim() === '') {
      Swal.fire('Advertencia', 'Por favor complete todos los campos', 'warning');
      return;
    }

    const data = {
      titulo: titulo,
      description: description
    };

    try {
      const response = await axios.post('http://localhost:4000/preguntas', data);

      if (response.status === 201) {
        Swal.fire('Success', 'Pregunta enviada exitosamente', 'success');
        console.log("Pregunta enviada exitosamente");
      } else {
        Swal.fire('Error', 'Envío de pregunta fallido', 'error');
        console.error("Error al enviar pregunta, verifique la información");
      }
    } catch (error) {
      Swal.fire('Error', 'Ocurrió un error inesperado', 'error');
      console.error(error);
    }
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
            value={description}
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