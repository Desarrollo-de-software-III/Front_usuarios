import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './views/Home/Home.js';
// import RegistrationForm from './views/RegistrationForm';
// import LoginForm from './views/LoginForm';

function App() {
  return (
    <Router>
      <Routes> {/* Usamos <Routes> en lugar de <Router> */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/registro" element={<RegistrationForm />} />
        <Route path="/inicio-sesion" element={<LoginForm />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

