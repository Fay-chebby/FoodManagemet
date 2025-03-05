import React from 'react';
import {BrowserRouter,Routes,Route}from 'react-router-dom'

import './App.css';
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Resetpassword from "./Pages/Reset password/Resetpassword";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset-password" element={<Resetpassword />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
