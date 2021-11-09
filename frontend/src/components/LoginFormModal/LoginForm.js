import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginFormPage.css';
import imageLinks from "../../data/imageLinks";

function LoginForm() {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
    };

    return (
        <div className="modal_container">
            <form onSubmit={handleSubmit}>
                <div className="modal_logo">
                    <img src={`${imageLinks.invert_logo}`} />
                </div>
                <ul>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <div className="modal_username">
                    <i className="fas fa-user">
                        <input
                            type="text"
                            value={credential}
                            placeholder="Username or E-mail"
                            onChange={(e) => setCredential(e.target.value)}
                            required
                        />
                    </i>
                </div>
                <div className="modal_password">
                    <i className="fas fa-key">
                        <input
                            type="password"
                            value={password}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </i>
                </div>
                <div className="modal_submit">
                    <button type="submit">Log In</button>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
