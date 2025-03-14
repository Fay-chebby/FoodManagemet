import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Styles/SignUp.css";



function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [hints, setHints] = useState([]);

    //  Password Validation Function
    const validatePassword = (password) => {
        const errors = [];

        if (password.length > 0 && password.length < 8) {
            errors.push("Password must be at least 8 characters long.");
        }
        if (password.length > 0 && !/[A-Z]/.test(password)) {
            errors.push("Password must contain at least one uppercase letter.");
        }
        if (password.length > 0 && !/\d/.test(password)) {
            errors.push("Password must contain at least one number.");
        }
        if (password.length > 0 && !/[@$!%*?&]/.test(password)) {
            errors.push("Password must contain at least one special character (@$!%*?&).");
        }

        return errors;
    };


    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setHints(validatePassword(newPassword)); // Show validation hints
    };


    const handleConfirmPasswordChange = (e) => {
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);

        // Trim both passwords to prevent accidental space mismatches
        if (password.trim() !== newConfirmPassword.trim()) {
            setError("Passwords do not match.");
        } else {
            setError(""); // Clear error if they match
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setError(""); // Reset error message

        // Final validation before submission
        if (validatePassword(password).length > 0) {
            setError("Password must meet all complexity requirements.");
            return;
        }

        if (password.trim() !== confirmPassword.trim()) {
            setError("Passwords do not match.");
            return;
        }

        console.log("Signup Successful", { firstName, lastName, email, password });
        alert("Signup Successful! ");
        // Call API or further processing here
    };

    return (
        <div className="signup-container">
            <div className=" ">
                <div
                    className="  ">
                    <img
                        src="/Premium Vector _ Task to do list illustration.jpeg"
                        alt="Signup"
                        className=""
                    />
                </div>
            </div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit} className="signup-form">
                <div className="input-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        id="firstName"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        name="firstName"
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        name="lastName"
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        name="password"
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        name="confirmPassword"
                        required
                    />
                </div>

                {/* Show password hints dynamically */}
                {password.length > 0 && hints.length > 0 && (
                    <div className="password-hints">
                        {hints.map((hint, index) => (
                            <p key={index}>{hint}</p>
                        ))}
                    </div>
                )}

                {/* Show Password Matching Error */}
                {error && <p className="error-message">{error}</p>}

                <button type="submit" className="signup-btn">Sign Up</button>
            </form>

            {/* Already Have an Account */}
            <div className="login-link">
                <h2>Already have an account?</h2>
                <button className="login-btn">
                    <Link to="/login">Login</Link>
                </button>
            </div>
        </div>
    );
}

export default Signup;
