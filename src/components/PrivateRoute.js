import React from "react";
import { Navigate, Route } from "react-router-dom";

export default function PrivateRoute({ component: Component, roles, ...rest }) {
    return (
        <Route
            {...rest}
            render={props => {
                if (!localStorage.getItem("user")) {
                    return (
                        <Navigate to={{ pathname: "/login", state: { from: props.location } }} />
                    );
                }

                return <Component {...props} />;
            }}
        />
    );
}
