import React, { useState } from "react";

function Reset() {
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

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        console.log("Reset Successful", { password });
        // Call API or further processing here
    };

    return (
        <div>
            <h2>Reset Password</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
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
                        required
                    />
                </div>
                {/* Show password hints dynamically */}
                {password.length > 0 && hints.length > 0 && (
                    <div style={{ color: "red", fontSize: "0.9em", marginTop: "5px" }}>
                        {hints.map((hint, index) => (
                            <p key={index}>{hint}</p>
                        ))}
                    </div>
                )}
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type="submit">Reset</button>
            </form>
        </div>
    );
}

export default Reset;
