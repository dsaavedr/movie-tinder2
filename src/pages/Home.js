import React from "react";
import { useSelector } from "react-redux";

import ServiceSelect from "../components/ServiceSelect";

export default function Home() {
    const user = useSelector(state => state.auth.user);

    return (
        <>
            <h1>Hi, {user.firstName}!</h1>
            <h2>Please select your available streaming services</h2>
            <ServiceSelect />
        </>
    );
}
