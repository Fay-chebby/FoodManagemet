import React, { useState } from "react";
import {Link} from "react-router-dom";

function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [hints, setHints] = useState([]);

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
        setHints(validatePassword(newPassword)); // Show hints dynamically
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(""); // Reset error message

        if (validatePassword(password).length > 0) {
            setError("Password must meet all complexity requirements.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        console.log("Signup Successful", { firstName, lastName, email, password });
        // Call API or further processing here
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div>
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
                <div>
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
                <div>
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
                <div>
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
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        name="confirmPassword"
                        required
                    />
                </div>
                {/* Show password hints dynamically */}
                {password.length > 0 && hints.length > 0 && (
                    <div style={{color: "red", fontSize: "0.9em", marginTop: "5px"}}>
                        {hints.map((hint, index) => (
                            <p key={index}>{hint}</p>
                        ))}
                    </div>
                )}
                {error && <p style={{color: "red"}}>{error}</p>}
                <div>
                    <h2>Already have account?</h2>
                    <button>
                        <Link to="/login" style={{textDecoration: "none", color: "inherit"}}>
                            login
                        </Link>
                    </button>
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;
