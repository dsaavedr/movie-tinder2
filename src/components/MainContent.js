import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Footer from "./Footer";

import Header from "./Header";

export default function MainContent() {
    const auth = localStorage.getItem("user");

    if (!auth) return <Navigate to='/login' />;

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
