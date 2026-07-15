import { ConfigProvider } from "antd";

const AntContext = ({ children }) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#64221D"
                }
            }}
        >
            {children}
        </ConfigProvider>
    );
}

export default AntContext;