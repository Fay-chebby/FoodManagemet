import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Resetpassword from "./Pages/Reset password/Resetpassword";
import Home from "./Pages/Home/home";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/reset-password" element={<Resetpassword />} />
            </Routes>
        </div>
    );
}

export default App;
