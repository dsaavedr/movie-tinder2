import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import PrivateRoute from "./components/PrivateRoute";
import Toast from "./components/Toast";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error404 from "./pages/404";

import { AlertController } from "./controllers";
const alertController = new AlertController();

function App() {
    const dispatch = useDispatch();

    const alert = useSelector(state => state.alert);

    useEffect(() => {
        window.addEventListener("locationchange", () => {
            dispatch(alertController.clear());
        });
    }, []);

    return (
        <>
            {alert && alert.type && <Toast alert={alert} />}
            <BrowserRouter>
                <Routes>
                    <Route path='*' element={<Error404 />} />
                    <Route exact path='/' element={<PrivateRoute />}>
                        <Route exact path='/' element={<Home />} />
                    </Route>
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
