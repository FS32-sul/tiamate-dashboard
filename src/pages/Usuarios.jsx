/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/set-state-in-effect */
import { App, Button, Popconfirm, Table } from "antd";
import { AXIOS } from './../services/index';
import { useEffect, useState } from "react";
import { LuPencil, LuPlus, LuTrash2 } from "react-icons/lu";

const Usuarios = () => {

    const { notification } = App.useApp();
    const [usuarios, setUsuarios] = useState([]);

    async function buscar() {
        const res = await AXIOS.get("/usuarios", {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("token")}`
            }
        });

        if (!Array.isArray(res.data)) {
            notification.error({
                title: "Aviso:",
                description: res.data.mensagem,
                placement: "bottomRight"
            });
            return;
        }

        setUsuarios(res.data);
    }

    useEffect(() => {
        buscar();
    }, []);

    return (
        <div>
            <div className="flex justify-between items-center mb-5">
                <h1 className="text-2xl text-vinho font-bold">Usuários</h1>
                <Button type="primary" icon={<LuPlus />}>Novo usuário</Button>
            </div>

            <Table
                dataSource={ usuarios || []}
                rowKey={"id"}
            >
                <Table.Column
                    title="Nome"
                    dataIndex={"nome"}
                    rowKey="nome"
                />
                <Table.Column
                    title="Email"
                    dataIndex={"email"}
                    rowKey="email"
                />
                <Table.Column 
                    title="Ações"
                    className="w-25"
                    render={(_, usuario) => (
                        <div className="flex gap-4 justify-end">
                            <Button 
                                icon={<LuPencil />}
                                shape="circle"
                                type="primary"
                            />
                            <Popconfirm
                                title="Aviso:"
                                description="Deseja realmente apagar?"
                                cancelText="Não"
                                okText="Sim"
                            >
                                <Button 
                                icon={<LuTrash2 />}
                                shape="circle"
                                type="primary"
                            />
                            </Popconfirm>
                        </div>
                    )}
                />
            </Table>
        </div>
    );
}

export default Usuarios;