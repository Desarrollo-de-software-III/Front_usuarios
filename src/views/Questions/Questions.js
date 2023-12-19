import React, { useState, useEffect } from "react";
import './Questions.css';
import Navbar from '../../components/Navbar.js';
import LoginModal from "../../components/LoginForm.js";
import SignUpModal from "../../components/SignUpForm.js";
import PreguntaModal from "../../components/Pregunta.js";

function Questions() {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const [showPreguntaModal, setShowPreguntaModal] = useState(false);
    const [questionsData, setQuestionsData] = useState([]);

    useEffect(() => {
        // GET al endpoint de preguntas
        fetch('http://localhost:4000/preguntas')
            .then(response => response.json())
            .then(data => setQuestionsData(data))
            .catch(error => console.error('Error fetching questions:', error));
    }, []);

    const openPreguntaModal = () => {
        setShowPreguntaModal(true);
    };

    const closePreguntaModal = () => {
        setShowPreguntaModal(false);
    };

    const openLoginModal = () => {
        setShowLoginModal(true);
    };

    const closeLoginModal = () => {
        setShowLoginModal(false);
    };

    const openSignUpModal = () => {
        setShowSignUpModal(true);
    };

    const closeSignUpModal = () => {
        setShowSignUpModal(false);
    };

    return (
        <div className="background">
            <Navbar openLoginModal={openLoginModal} openSignUpModal={openSignUpModal} />

            {showLoginModal && <LoginModal onClose={closeLoginModal} />}
            {showSignUpModal && <SignUpModal onClose={closeSignUpModal} />}
            {showPreguntaModal && <PreguntaModal onClose={closePreguntaModal} />}

            <div className="container-questions">
                <h1>All questions</h1>
                <div className="ask-button" onClick={openPreguntaModal}>
                    Ask Question
                </div>
            </div>
            <div className="question-container">
                {questionsData.map((question) => (
                    <div key={question._id} className="question">
                        <div className="question-info">
                            <h2>{question.titulo}</h2>
                            <p>{question.description}</p>
                        </div>
                        <div className="question-stats">
                            <p>{question.count ? `${question.count} Answers` : '0 Answers'}</p>
                            <p>{question.favoritesCount ? `${question.favoritesCount} Favorites` : '0 Favorites'}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Questions;
