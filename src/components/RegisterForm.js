import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { UserController } from "../controllers";
const userController = new UserController();

export default function RegisterForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const registering = useSelector(state => state.register.registering);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        setSubmitted(true);
        dispatch(
            userController.register({ firstName, lastName, email, password }, () =>
                navigate("/login")
            )
        );
    };

    useEffect(() => {
        //   Reset login status
        dispatch(userController.logout());
    }, []);

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <div className='input-group'>
                    <label htmlFor='register-first-name'>First Name</label>
                    <input
                        type='text'
                        required
                        name='register-first-name'
                        id='register-first-name'
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                </div>
                <div className='input-group'>
                    <label htmlFor='register-last-name'>Last Name</label>
                    <input
                        type='text'
                        required
                        name='register-last-name'
                        id='register-last-name'
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                </div>
                <div className='input-group'>
                    <label htmlFor='register-email'>Email</label>
                    <input
                        type='email'
                        required
                        name='register-email'
                        id='register-email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className='input-group'>
                    <label htmlFor='login-password'>Password</label>
                    <input
                        type='password'
                        required
                        name='login-passowrd'
                        id='login-password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className='input-group submit'>
                    <button disabled={submitted || registering} type='submit'>
                        SIGN UP
                    </button>
                </div>
                <div className='input-group extra-options'>
                    <Link to='/login'>Or go back</Link>
                </div>
            </form>
        </div>
    );
}
