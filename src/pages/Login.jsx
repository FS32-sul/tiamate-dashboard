import { Button, Form, Input } from "antd";

const Login = () => {

    function logar(dados){
        console.log(dados);
        
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
                >Entrar</Button>
            </Form>
        </div>
    );
}

export default Login;