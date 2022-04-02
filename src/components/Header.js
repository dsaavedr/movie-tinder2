import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { UserController } from "../controllers";

const userController = new UserController();

export default function Header() {
    const dispatch = useDispatch();

    const logo = null || "Logo";

    const logout = () => {
        dispatch(userController.logout());
    };

    return (
        <nav className='menu'>
            {/* 1. Left menu */}
            <ul>
                <li className='menu__item'>Item 1</li>
                <li className='menu__item'>Item 2</li>
                <li className='menu__item'>Item 3</li>
            </ul>
            {/* 2. Logo */}
            <Link className='logo' to='/'>
                {logo}
            </Link>
            {/* 3. Right menu */}
            <ul>
                <li className='menu__item'>Item 1</li>
                <li className='menu__item'>
                    <a href='#' onClick={logout}>
                        Logout
                    </a>
                </li>
            </ul>
        </nav>
    );
}
