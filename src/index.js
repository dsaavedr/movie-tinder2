import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Error404 from "./pages/404";

import "./styles/bootstrap-grid.min.css";
import "./styles/index.sass";
import { Provider } from "react-redux";
import { store } from "./helpers";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    {/* Authenticated routes */}
                    <Route path='/' element={<App />}>
                        <Route path='/' element={<Home />} />
                        <Route path='*' element={<Error404 />} />
                    </Route>
                    {/* Unauthenticated routes */}
                    <Route path='/login' element={<Login />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
