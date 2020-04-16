import React, { useState, useContext } from "react";
import { AuthContext } from "./index";
import * as firebase from "firebase";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [error, setErrors] = useState("");

    const Auth = useContext(AuthContext);
    const handleForm = e => {
        e.preventDefault();
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(res => {
                if (res.user) Auth.setLoggedId(true);
            })
            .catch(e => {
                setErrors(e.message);
            });
    };

    return (
        <div>
            <h1>Login</h1>
            <from onSubmit={e => handleForm(e)}>
                <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                name="email"
                type="email"
                placeholder="email"
                />
                <input
                onChange={e => setPassword(e.target.value)}
                name="password"
                value={password}
                type="password"
                placeholder="password"
                />
                <hr />
                <button class="googleBtn" type="button">
                    <img
                    src="https://upload.wikimedia.org/wikimedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt="logo"
                    />
                    Login With Google
                </button>
                <button type="submit">Login</button>
                <span>{error}</span>
            </from>
        </div>
    );
};

export default Login;




        