import { BrowserRouter, Route, Routes } from "react-router";
import Login from "../pages/Login";

const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Paths;