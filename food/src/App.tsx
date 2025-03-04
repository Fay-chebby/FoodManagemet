import React from 'react';

import './App.css';
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Resetpassword from "./Pages/Reset password/Resetpassword";

function App() {
  return (
    <div className="App">
    <Login/>
      <Signup/>
      <Resetpassword/>
    </div>
  );
}

export default App;
