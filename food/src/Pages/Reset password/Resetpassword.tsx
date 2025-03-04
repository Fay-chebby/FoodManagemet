import React, {useState} from "react";


function Reset () {
    const [Password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const [Error, setError] = useState("");
    const [hints, setHints] = useState<string[]>([]);
    const validatePassword = (password: string) => {
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
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPassword(newPassword);

        // Show hints only if password is being typed
        setHints(validatePassword(newPassword));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(""); // Reset error message

        if (Password !== ConfirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        console.log("Reset Successful", {  Password });
        // Call API or further processing here
    };

    return(
        <div>
            <div>
                <h2>Reset password</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="Password">Password</label>
                        <input
                            id="Password"
                            type="password"
                            value={Password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="Password">Confirm Password</label>
                        <input
                            id="Password"
                            type="password"
                            value={ConfirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    {/* Show hints dynamically only when typing */}
                    {Password.length > 0 && hints.length > 0 && (
                        <div style={{ color: "red", fontSize: "0.9em", marginTop: "5px" }}>
                            {hints.map((hint, index) => (
                                <p key={index}>{hint}</p>
                            ))}
                        </div>
                    )}
                    {Error && <p style={{ color: "red" }}>{Error}</p>}
                    <button type="submit">Reset</button>

                </form>
            </div>
        </div>
    )
 }
 export default Reset ;