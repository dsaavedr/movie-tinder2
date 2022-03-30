import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { UserController } from "../controllers";
const userController = new UserController();

export default function LoginForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        setLoading(true);
        dispatch(userController.login({ email, password }, () => navigate("/")));
    };

    return (
        <div className='login-form'>
            <form onSubmit={handleSubmit}>
                <div className='input-group'>
                    <label htmlFor='login-email'>Email</label>
                    <input
                        type='email'
                        name='login-email'
                        id='login-email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className='input-group'>
                    <label htmlFor='login-password'>Password</label>
                    <input
                        type='password'
                        name='login-passowrd'
                        id='login-password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className='input-group'>
                    <button disabled={loading} type='submit'>
                        CONNECT
                    </button>
                </div>
                <div className='input-group google'>
                    <button disabled={loading} type='button'>
                        SIGN IN WITH GOOGLE
                    </button>
                </div>
                <div className='input-group extra-options'>
                    <Link to='/recovery'>Forgot your password?</Link>
                    <span>
                        Don't have an account? <Link to='/register'>Sign up</Link>
                    </span>
                </div>
            </form>
        </div>
    );
}
