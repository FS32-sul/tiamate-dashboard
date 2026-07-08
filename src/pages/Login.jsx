import { App, Button, Form, Input } from "antd";
import { AXIOS } from "../services";
import { useNavigate } from "react-router";
import { useState } from "react";

const Login = () => {

    const [loading, setLoading] = useState(false);
    const { notification } = App.useApp();
    const navigate = useNavigate();

    async function logar(dados){
        setLoading(true);
        try {
            const res = await AXIOS.post("/login", dados);
            setLoading(false);
            if(!res.data.token){
                notification.error({
                    title: "Aviso:",
                    description: res.data.mensagem,
                    placement: "bottomRight"
                });
                return;
            }
            sessionStorage.setItem("token", res.data.token);
            navigate("/admin");
        } catch (error) {
            return
        }
        
    }

    return (
        <div className="flex justify-center items-center bg-slate-300 h-screen">
            <Form
                layout="vertical"
                className="bg-white rounded-3xl shadow-2xl p-6! w-75"
                onFinish={logar}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: "Campo obrigatório" }]}
                >
                    <Input placeholder="Digite seu email" />
                </Form.Item>
                <Form.Item
                    label="Senha"
                    name="senha"
                    rules={[{ required: true, message: "Campo obrigatório" }]}
                >
                    <Input.Password placeholder="********" />
                </Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="w-full"
                    loading={loading}
                >Entrar</Button>
            </Form>
        </div>
    );
}

export default Login;