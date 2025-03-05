import logo from './logo.svg';
import {Routes,Route} from 'react-router-dom'
import './App.css';
import Login from "./pages/login/Login";
import HomePage from "./pages/home page/Home page";
import Signup from "./pages/Signup page/Signup";
import ResetPassword from "./pages/Reset password/ResetPassword";

function App() {
  return (
    <div className="App">

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                 <Route path="/restPassword" element={<ResetPassword />} />
            </Routes>


    </div>
  );
}

export default App;
