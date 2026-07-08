import { Navigate } from "react-router";

const SafePaths = ({ children }) => {
    const token = sessionStorage.getItem("token") || null;
    return token ? children : <Navigate to={"/"} />;
}

export default SafePaths;