import React, { useState } from "react";
import './Home.css'; 
import Navbar from '../../components/Navbar.js';
import LoginModal from "../../components/LoginForm.js";
import SignUpModal from "../../components/SignUpForm.js";
import animation1 from './images/animation1.gif'
import animation2 from './images/animation2.gif'
import animation3 from './images/animation3.gif'
import animation4 from './images/animation4.gif'
import gif from './images/gif.gif'

function Home() {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);

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
        <div className="gradient-background">
            <Navbar openLoginModal={openLoginModal} openSignUpModal={openSignUpModal} />
            {showLoginModal && <LoginModal onClose={closeLoginModal} />}
            {showSignUpModal && <SignUpModal onClose={closeSignUpModal} />}
            
            <h1>Welcome to questions and answers</h1>
            <h4>discover the benefits!</h4>
            
            <div className="features">
                <div className="feature">
                    <p>Find answers to your questions</p>
                    <img src={animation1} alt="Animation 1" />
                </div>
                <div className="feature">
                    <p>Explore a variety of categories</p>
                    <img src={animation2} alt="Animation 2" />
                </div>
                <div className="feature">
                    <p>Mark your favorites</p>
                    <img src={animation3} alt="Animation 3" />
                </div>
                <div className="feature">
                    <p>Collaborate with an active community</p>
                    <img src={animation4} alt="Animation 4" />
                </div>
            </div>
            <div className="centered-gif">
                <img src={gif} alt="Centered GIF" />
            </div>
        </div>
    );
}

export default Home;



