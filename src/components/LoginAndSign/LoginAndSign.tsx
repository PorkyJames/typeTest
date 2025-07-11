import "./LoginAndSign.css"

import { useEffect, useRef, useState} from "react";

export default function LoginAndSign() {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [username, setUserName] = useState<string>("")

    return (
        <>
            <div className="login-wrapper">
                <h2>Login</h2>
                <input type='username' placeholder="Username" />
                <input type='password' placeholder="Password" />
                <button>Login</button>
            </div>

            <div className="signup-wrapper">
                <h2>Sign Up</h2>
                <input type='email' placeholder="Email" />
                <input type='username' placeholder="Username" />
                <input type='password' placeholder="Password" />
                <button>Sign Up</button>
            </div>
        </>
    )
}
