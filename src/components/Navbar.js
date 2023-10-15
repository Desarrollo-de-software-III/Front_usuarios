import React, { useState } from "react";
import './Navbar.css';
import logo from './images/logo.jpeg';
import teams from './images/teams.png';

function Navbar({ openLoginModal, openSignUpModal }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="left-section">
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
        <img src={logo} alt="Logo" className="logo"/>
        <div className="qna">Q&A</div>
      </div>
      <div className="right-section">
        <div className="search-bar">
          <input type="text" placeholder="Buscar" />
        </div>
        <div className="login-signup">
          <div className="login-button" onClick={openLoginModal}>Log in</div>
          <div className="signup-button" onClick={openSignUpModal}>Sign up</div>
        </div>
      </div>
      {menuOpen && (
        <div className="menu">
          <p>Public</p>
          <ul>
            <li>Home</li>
            <li>Questions</li>
            <li>Users</li>
            <li>Tags</li>
          </ul>
          <p>Teams</p>
          <img src={teams} alt="Logo" className="logo" />
          <p>About</p>
        </div>
      )}
    </div>
  );
}

export default Navbar;










