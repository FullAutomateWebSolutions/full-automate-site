
import {
  Typography,
  
  Row,
  Col,

  Space,

} from "antd";
const { Title, Paragraph } = Typography;


export default function FooterSite() {
  return (
  <>
            {/* FOOTER PREMIUM */}
<footer className="footer">
  <div className="container">
    <Row gutter={[40, 40]}>
      
      {/* EMPRESA */}
      <Col xs={24} md={8}>
        <Title level={4} style={{ color: "#fff" }}>
          Tecd Sistemas
        </Title>

        <Paragraph style={{ color: "#94a3b8" }}>
          Sistemas e sites modernos para empresas que querem crescer e vender mais.
        </Paragraph>
      </Col>

      {/* LINKS */}
      <Col xs={24} md={8}>
        <Title level={5} style={{ color: "#fff" }}>
          Navegação
        </Title>

        <Space orientation="vertical">
          <a href="#">Início</a>
          <a href="#">Serviços</a>
          <a href="#">Projetos</a>
          <a href="#">Contato</a>
        </Space>
      </Col>

      {/* CONTATO */}
      <Col xs={24} md={8}>
        <Title level={5} style={{ color: "#fff" }}>
          Contato
        </Title>

        <Paragraph style={{ color: "#94a3b8" }}>
          WhatsApp: (11) 99999-9999
        </Paragraph>

        <Paragraph style={{ color: "#94a3b8" }}>
          contato@tecdsistemas.com
        </Paragraph>
      </Col>
    </Row>

    {/* LINHA FINAL */}
    <div className="footer-bottom">
      © {new Date().getFullYear()} Tecd Sistemas — Todos os direitos reservados
    </div>
  </div>
</footer>
  </>
  );
}