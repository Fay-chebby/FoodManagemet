
import React, {useState} from "react";
import {Link} from "react-router-dom";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log( ' login Attempt',{email, password});
    }


    return (

        <div>
            <div>
                <h1>Login Page</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="Email-input"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="Password-input"
                            required/>
                    </div>
                    <div>
                        <h2>Forgot password?</h2>
                        <button>
                            <Link to="/restPassword" style={{textDecoration: "none", color: "inherit"}}>
                                RestPassword
                            </Link>
                        </button>
                    </div>

                    <button type="submit">Login</button>
                </form>
            </div>

        </div>

    )
}

export default Login;