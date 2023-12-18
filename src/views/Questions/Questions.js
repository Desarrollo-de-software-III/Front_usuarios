import React, { useState } from "react";
import './Questions.css'; 
import Navbar from '../../components/Navbar.js';
import LoginModal from "../../components/LoginForm.js";
import SignUpModal from "../../components/SignUpForm.js";

function Questions() {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);

    const questionsData = [
        {
            id: 1,
            title: 'Cómo puedo aprender React?',
            description: 'Me gustaría empezar a aprender React y estoy buscando recursos recomendados.',
            answersCount: 5,
            favoritesCount: 10,
        },
        {
            id: 2,
            title: 'Problema al hacer fetch en React',
            description: 'Estoy teniendo problemas al hacer una solicitud fetch en mi aplicación React. ¿Alguien puede ayudarme?',
            answersCount: 8,
            favoritesCount: 15,
        },
        
    ];

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

            <div className="container-questions">
                <h1>All questions</h1>
                <div className="ask-button">
                    Ask Question
                </div>
            </div>
            <div className="question-container">
                {questionsData.map((question) => (
                    <div key={question.id} className="question">
                        <div className="question-info">
                            <h2>{question.title}</h2>
                            <p>{question.description}</p>
                        </div>
                        <div className="question-stats">
                            <p>{question.answersCount} Answers</p>
                            <p>{question.favoritesCount} Favorites</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Questions;