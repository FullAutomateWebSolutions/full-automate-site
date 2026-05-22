import { Row, Col } from "antd";
import {
  CloudOutlined,
  SafetyOutlined,
  BarChartOutlined,
  SyncOutlined,
} from "@ant-design/icons";

const items = [
  {
    icon: <CloudOutlined />,
    title: "100% NUVEM",
    desc: "Acesse de qualquer lugar, a qualquer hora.",
  },
  {
    icon: <SafetyOutlined />,
    title: "SEGURO",
    desc: "Proteção de dados e alta performance.",
  },
  {
    icon: <BarChartOutlined />,
    title: "INTELIGENTE",
    desc: "Dados que geram insights reais.",
  },
  {
    icon: <SyncOutlined />,
    title: "ATUALIZADO",
    desc: "Evolução contínua sem custo adicional.",
  },
];

export default function Features() {
  return (
    <section
      style={{
        padding: "60px 20px",
        background: "#fff",
      }}
    >
      <Row
        gutter={[24, 24]}
        justify="space-between"
        style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}
      >
        {items.map((item, index) => (
          <Col xs={12} md={6} key={index}>
            <div>
              {/* Ícone */}
              <div
                style={{
                  fontSize: 36,
                  color: "#1677ff",
                  marginBottom: 12,
                }}
              >
                {item.icon}
              </div>

              {/* Título */}
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 14,
                  letterSpacing: 0.5,
                  marginBottom: 6,
                }}
              >
                {item.title}
              </div>

              {/* Descrição */}
              <div
                style={{
                  fontSize: 13,
                  color: "#666",
                  lineHeight: 1.4,
                }}
              >
                {item.desc}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
}