import { Outlet } from "react-router";

const PageLayout = () => {
    return (  
        <div>
            <Outlet />
        </div>
    );
}

export default PageLayout;