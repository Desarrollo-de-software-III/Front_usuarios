import React, { useState } from "react";
import LoginModal from "../components/LoginForm.js";
import Navbar from '../components/Navbar.js';
import SignUpModal from "../components/SignUpForm.js";
import gif from '../components/images/gif.gif';
import './Home.css';

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
    <div className="gif-container">
            <div className="gradient-background"> 
                <Navbar openLoginModal={openLoginModal} openSignUpModal={openSignUpModal}/>
                {showLoginModal && <LoginModal onClose={closeLoginModal} />}
                {showSignUpModal && <SignUpModal onClose={closeSignUpModal} />}
                <h1>Welcome to questions and answers</h1>  
            </div>
            
        <img src={gif} alt="Animated GIF" className="animated-gif" />
    </div>
  );
}

export default Home;


