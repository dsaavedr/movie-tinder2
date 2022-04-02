import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Footer from "./Footer";

import Header from "./Header";

export default function MainContent() {
    const auth = useSelector(state => state.auth.user);

    if (!auth) return <Navigate to='/login' />;

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
