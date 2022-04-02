import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { UserController } from "../controllers";
const userController = new UserController();

export default function LoginForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loggingIn = useSelector(state => state.auth.loggingIn);
    const user = useSelector(state => state.auth.user);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        setLoading(true);
        dispatch(userController.login({ email, password }, () => navigate("/")));
    };

    const cleanInputs = () => {
        setEmail("");
        setPassword("");
        setLoading(false);
    };

    useEffect(() => {
        //   Check for authentication
        if (userController.isAuthenticated()) {
            const redirect = window.confirm(
                "Looks like you're already logged in. Would you like to logout? If not, you'll be redirected to the homepage."
            );
            if (redirect) {
                dispatch(userController.logout());
            } else {
                navigate("/");
            }
        }
    }, []);

    useEffect(() => {
        // auth failed
        if (loading && !loggingIn && !user) {
            cleanInputs();
        }
    }, [loggingIn]);

    return (
        <div className='form'>
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
