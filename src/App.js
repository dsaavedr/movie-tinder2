import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error404 from "./pages/404";

function App() {
    return (
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
    );
}

export default App;
