import { Col, Row, Flex } from "antd";
import {
  ApiOutlined,
  SettingOutlined,
  FileProtectOutlined,
  InteractionOutlined,
} from "@ant-design/icons";

const items = [
  {
    title: "INTEGRAÇÕES PODEROSAS",
    desc: "Conecte PDVs, marketplaces, plataformas e sistemas fiscais de forma simples e segura.",
    icon: <InteractionOutlined />,
  },
  {
    title: "INTEGRAÇÕES FISCAIS",
    desc: "Emissão e gestão de NF-e, NFC-e, CT-e, MDF-e e SPED com total conformidade e automação.",
    icon: <FileProtectOutlined />,
  },
  {
    title: "APIS E INTEGRAÇÕES",
    desc: "APIs robustas e flexíveis para conectar seu sistema com o que o seu negócio precisa.",
    icon: <ApiOutlined />,
  },
  {
    title: "RASTREAMENTO DE GADO",
    desc: "Solução completa para gestão, rastreamento e controle do seu rebanho em tempo real.",
    icon: <InteractionOutlined />,
  },
  {
    title: "PLATAFORMAS PERSONALIZADAS",
    desc: "Desenvolvemos plataformas sob medida para escalar sua operação e seus resultados.",
    icon: <SettingOutlined />,
  },
];

export default function StepsPage() {
  return (
    <section
      style={{
        padding: "80px 30px",
        background: "#0b2a4a",
        borderRadius: 10,
        color: "#fff",
        maxWidth: 900,
        margin: "0 auto",
      }}
    >
      <Row>
        <Col span={24}>
          <div style={{ position: "relative" }}>
            {/* linha vertical */}
            <div
              style={{
                position: "absolute",
                left: 28,
                top: 0,
                bottom: 0,
                width: 2,
                background: "rgba(255,255,255,0.2)",
              }}
            />

            {items.map((item, index) => (
              <Flex
                key={index}
                align="flex-start"
                gap={16}
                style={{ marginBottom: 40, position: "relative" }}
              >
                {/* Ícone */}
                <div
                  style={{
                    minWidth: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#1677ff",
                    fontSize: 22,
                    zIndex: 1,
                  }}
                >
                  {item.icon}
                </div>

                {/* Texto */}
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: 16,
                      letterSpacing: 1,
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      marginTop: 6,
                      color: "rgba(255,255,255,0.75)",
                      lineHeight: 1.5,
                      maxWidth: 600,
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
              </Flex>
            ))}
          </div>
        </Col>
      </Row>
    </section>
  );
}