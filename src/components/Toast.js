import React from "react";
import { useDispatch } from "react-redux";
import { AlertController } from "../controllers";

const alertController = new AlertController();

export default function Toast(props) {
    const dispatch = useDispatch();

    const dismissAlert = () => {
        dispatch(alertController.clear());
    };

    return (
        <div className={`toast toast-${props.type || "success"}`}>
            <button className='dismiss' onClick={dismissAlert}>
                &times;
            </button>
            <div className='icon'>🍁</div>
            <div className='type'>{props.type}</div>
            <div className='message'>{props.message}</div>
        </div>
    );
}
