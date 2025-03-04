import React, {useState} from "react";

function Signup(){
    const [FirstName,SetFirstName] = useState("");
    const [LastName,SetLastName] = useState("");
    const [Email,SetEmail] = useState("");
    const [Password,SetPassword] = useState("");
    const[confirmPassword,SetConfirmPassword] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    }

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
                onChange={(e)=>SetPassword(e.target.value)}
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
            <button type="submit">Signup</button>
        </form>
    </div>
        </div>
    )
}
export default Signup;