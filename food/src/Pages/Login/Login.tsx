// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {useState} from "react";
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
                       <button type="submit">Login</button>
                   </form>
               </div>

            </div>

    )
}
export default Login;