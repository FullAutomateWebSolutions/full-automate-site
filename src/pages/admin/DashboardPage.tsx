import {
  Card,
  Row,
  Col,
  Statistic,
  Typography,
} from "antd";

import {
  useEffect,
  useState,
} from "react";

import {
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "../../services/firebase";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";

const { Title } = Typography;

export default function DashboardPage() {
  const [metrics, setMetrics] =
    useState<any>({
      total: 0,
      novo: 0,
      negociacao: 0,
      fechado: 0,
    });

  useEffect(() => {
    async function load() {
      const snap = await getDocs(
        collection(db, "leads")
      );

      const docs = snap.docs.map((d) =>
        d.data()
      );

      const total = docs.length;

      const novo = docs.filter(
        (i: any) =>
          i.status === "novo"
      ).length;

      const negociacao = docs.filter(
        (i: any) =>
          i.status === "negociacao"
      ).length;

      const fechado = docs.filter(
        (i: any) =>
          i.status === "fechado"
      ).length;

      setMetrics({
        total,
        novo,
        negociacao,
        fechado,
      });
    }

    load();
  }, []);

  const pieData = [
    {
      name: "Novo",
      value: metrics.novo,
    },
    {
      name: "Negociação",
      value: metrics.negociacao,
    },
    {
      name: "Fechado",
      value: metrics.fechado,
    },
  ];

  const barData = [
    { mes: "Jan", leads: 8 },
    { mes: "Fev", leads: 12 },
    { mes: "Mar", leads: 18 },
    { mes: "Abr", leads: 24 },
    { mes: "Mai", leads: 30 },
  ];

  return (
    <div style={{ padding: 40 }}>
      <Title level={2}>
        Dashboard Analytics
      </Title>

      <Row gutter={[24, 24]}>
        <Col xs={24} md={8}>
          <Card>
            <Statistic
              title="Total Leads"
              value={metrics.total}
            />
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card>
            <Statistic
              title="Novos"
              value={metrics.novo}
            />
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card>
            <Statistic
              title="Fechados"
              value={metrics.fechado}
            />
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card title="Status Leads">
            <ResponsiveContainer
              width="100%"
              height={300}
            >
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  outerRadius={110}
                  label
                >
                  <Cell />
                  <Cell />
                  <Cell />
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card title="Leads por Mês">
            <ResponsiveContainer
              width="100%"
              height={300}
            >
              <BarChart data={barData}>
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="leads" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
    </div>
  );
}