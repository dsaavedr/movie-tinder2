import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AlertController } from "../controllers";

const alertController = new AlertController();

export default function Toast(props) {
    const dispatch = useDispatch();

    const { type, message } = props.alert;

    const dismissAlert = () => {
        dispatch(alertController.clear());
    };

    useEffect(() => {
        setTimeout(dismissAlert, 4000);
    }, []);

    const icon = type === "success" ? "✔" : type === "warning" ? "⚡" : "❗";

    return (
        <div className={`toast toast-${type || "success"}`}>
            <button className='dismiss' onClick={dismissAlert}>
                &times;
            </button>
            <div className='icon'>{icon}</div>
            <div className='type'>{type}</div>
            <div className='message'>{message}</div>
        </div>
    );
}
