import { BrowserRouter, Route, Routes } from "react-router";
import Login from "../pages/Login";
import Home from "../pages/Home";
import SafePaths from "./SafePaths";
import PageLayout from "../layouts/PageLayout";
import Usuarios from "../pages/Usuarios";

const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/admin" element={<SafePaths><PageLayout /></SafePaths>}>
                    <Route index element={<Home />} />
                    <Route path="usuarios" element={<Usuarios />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Paths;