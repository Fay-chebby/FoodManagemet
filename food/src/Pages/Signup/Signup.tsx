import React, {useState} from "react";

function Signup(){
    const [FirstName,SetFirstName] = useState("");
    const [LastName,SetLastName] = useState("");
    const [Email,SetEmail] = useState("");
    const [Password,SetPassword] = useState("");
    const[confirmPassword,SetConfirmPassword] = useState("");
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
        SetPassword(newPassword);

        // Show hints only if password is being typed
        setHints(validatePassword(newPassword));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(""); // Reset error message

        if (!validatePassword(Password)) {
            setError("Password must be at least 8 characters long, include one uppercase letter, one number, and one special character.");
            return;
        }

        if (Password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        console.log("Signup Successful", { FirstName, LastName, Email, Password });
        // Call API or further processing here
    };

    return(
        <div>
    <div>
        <h1> SignUp</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="FirstName">FirstName</label>
                <input
                id="FirstName"
                type="text"
                value={FirstName}
                onChange={(e)=>SetFirstName(e.target.value)}
                name="FirstName"

                />
            </div>
            <div>
                <label htmlFor="LastName">LastName</label>
                <input
                id="LastName"
                type="text"
                value={LastName}
                onChange={(e)=>SetLastName(e.target.value)}
                name="LastName"
                />
            </div>
            <div>
                <label htmlFor="Email">Email</label>
                <input
                id="Email"
                type="email"
                value={Email}
                onChange={(e)=>SetEmail(e.target.value)}
                name="Email"/>

            </div>
            <div>
                <label htmlFor="Password">Password</label>
                <input
                id="Password"
                type="password"
                value={Password}
                onChange={handlePasswordChange}
                name="Password"/>
            </div>
            <div>
            <label htmlFor="Confirmation">Confirm Password</label>
                <input
                id="Confirmation"
                type="password"
                value={confirmPassword}
                onChange={(e)=>SetConfirmPassword(e.target.value)}
                name="Confirmation"/>
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
            <button type="submit">Signup</button>
        </form>
    </div>
        </div>
    )
}
export default Signup;