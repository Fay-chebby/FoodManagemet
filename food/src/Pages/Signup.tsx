function Signup(){

    return(
        <div>
    <div>
        <h1> SignUp</h1>
        <form>
            <div>
                <label htmlFor="FirstName">FirstName</label>
                <input
                id="FirstName"
                type="text"
                name="FirstName"
                />
            </div>
            <div>
                <label htmlFor="LastName">LastName</label>
                <input
                id="LastName"
                type="text"
                name="LastName"
                />
            </div>
            <div>
                <label htmlFor="Email">Email</label>
                <input
                id="Email"
                type="email"
                name="Email"/>

            </div>
            <div>
                <label htmlFor="Password">Password</label>
                <input
                id="Password"
                type="password"
                name="Password"/>
            </div>
            <div>
            <label htmlFor="Confirmation">Confirm Password?</label>
                <input
                id="Confirmation"
                type="password"
                name="Confirmation"/>
            </div>
            <button type="submit">Signup</button>
        </form>
    </div>
        </div>
    )
}
export default Signup;