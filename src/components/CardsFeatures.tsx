import { Row, Col } from "antd";
import {
  DesktopOutlined,
  FileTextOutlined,
  AppstoreOutlined,
  DeploymentUnitOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";

const items = [
  {
    icon: <DesktopOutlined />,
    title: "PDVS E AUTOMAÇÃO",
    desc: "Integre e gerencie múltiplos PDVs em tempo real, com sincronização automática de vendas, estoque e clientes.",
    list: [
      "Gestão centralizada",
      "Sincronização em tempo real",
      "Mais controle e eficiência",
    ],
  },
  {
    icon: <FileTextOutlined />,
    title: "INTEGRAÇÕES FISCAIS",
    desc: "Automatize a emissão, transmissão e gestão de documentos fiscais com segurança e conformidade.",
    list: [
      "NF-e, NFC-e, CT-e, MDF-e",
      "SPED Fiscal e Contribuições",
      "Regras fiscais sempre atualizadas",
    ],
  },
  {
    icon: <AppstoreOutlined />,
    title: "RASTREAMENTO DE GADO",
    desc: "Tenha o controle completo do seu rebanho, localização, sanidade e movimentações em tempo real.",
    list: [
      "Controle de rebanho",
      "Geolocalização e histórico",
      "Relatórios e dashboards",
    ],
  },
  {
    icon: <DeploymentUnitOutlined />,
    title: "PLATAFORMAS E SISTEMAS",
    desc: "Desenvolvemos plataformas personalizadas para atender suas necessidades e impulsionar seu negócio.",
    list: [
      "Sistemas escaláveis",
      "Soluções sob medida",
      "Tecnologia de ponta",
    ],
  },
];

export default function CardsFeatures() {
  return (
    <section
      style={{
        padding: "60px 20px",
        background: "#f8fafc",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Row gutter={[24, 24]} >
          {items.map((item, index) => (
            <Col xs={24} md={12} lg={6} key={index}>
              <div
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  padding: 10,
                  height: "100%",
                  border: "1px solid #eee",
                  transition: "0.8s",
                }}
                className="card"
              >
                {/* Ícone */}
                <div 
                  style={{
                    fontSize: 32,
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
                    marginBottom: 8,
                  }}
                >
                  {item.title}
                </div>

                {/* Descrição */}
                <div
                  style={{
                    fontSize: 13,
                    color: "#666",
                    marginBottom: 12,
                    lineHeight: 1.5,
                  }}
                >
                  {item.desc}
                </div>

                {/* Lista */}
                <div>
                  {item.list.map((text, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        fontSize: 13,
                        marginBottom: 6,
                        color: "#333",
                      }}
                    >
                      <CheckCircleFilled
                        style={{ color: "#1677ff", fontSize: 12 }}
                      />
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* hover effect */}
      {/* <style jsx>{`
        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }
      `}</style> */}
    </section>
  );
}