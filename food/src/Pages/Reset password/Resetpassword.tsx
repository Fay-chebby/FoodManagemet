import {useState} from "react";


function Reset () {
    const [password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    return(
        <div>
            <div>
                <h2>Reset password</h2>
                <form>
                    <div>
                        <label htmlFor="Password">Password</label>
                        <input
                            id="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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

                </form>
            </div>
        </div>
    )
 }
 export default Reset ;