import {
  Table,
  Tag,
  Typography,
  Select,
  message,
} from "antd";

import {
  useEffect,
  useState,
} from "react";

import {
  collection,
  onSnapshot,
  orderBy,
  query,
  doc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../../services/firebase";

const { Title } = Typography;

export default function LeadsPage() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const q = query(
      collection(db, "leads"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const leads = snapshot.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));

      setData(leads);
    });

    return () => unsubscribe();
  }, []);

  const updateStatus = async (
    id: string,
    status: string
  ) => {
    await updateDoc(
      doc(db, "leads", id),
      { status }
    );

    message.success("Status atualizado");
  };

  return (
    <div style={{ padding: 40 }}>
      <Title>Leads em Tempo Real</Title>

      <Table
        rowKey="id"
        dataSource={data}
        pagination={{ pageSize: 10 }}
        columns={[
          {
            title: "Nome",
            dataIndex: "nome",
          },
          {
            title: "Telefone",
            dataIndex: "telefone",
          },
          {
            title: "Empresa",
            dataIndex: "empresa",
          },
          {
            title: "Serviço",
            dataIndex: "servico",
          },
          {
            title: "Status",
            dataIndex: "status",
            render: (_, record) => (
              <Select
                value={record.status}
                style={{ width: 140 }}
                onChange={(value) =>
                  updateStatus(
                    record.id,
                    value
                  )
                }
                options={[
                  {
                    label: "Novo",
                    value: "novo",
                  },
                  {
                    label: "Contato",
                    value: "contato",
                  },
                  {
                    label: "Negociação",
                    value: "negociacao",
                  },
                  {
                    label: "Fechado",
                    value: "fechado",
                  },
                ]}
              />
            ),
          },
        ]}
      />
    </div>
  );
}