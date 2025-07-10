import "./LoginAndSign.css"

import { useEffect, useRef, useState} from "react";

export default function LoginAndSign() {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [username, setUserName] = useState<string>("")

    return (
        <>
            <div className="login-wrapper">
                <input
                    type='username'
                    placeholder="Username"
                />
                <input
                    type='password'
                    placeholder="Password"
                />
                <button>Login</button>
            </div>

            <div className="signup-wrapper">
                <input
                    type='email'
                    placeholder="Email"
                />
                <input
                    type='username'
                    placeholder="Username"
                />
                <input
                    type='password'
                    placeholder="Password"
                />
                <button>Sign Up</button>
            </div>
        </>
    )
}
