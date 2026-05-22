import {
  Typography,
  Row,
  Col,
  Card
} from "antd";
import { Avatar } from "antd";
const { Title, Paragraph } = Typography;
import { Reveal } from "../hooks/useReveal";

    const TestimonialPage = () => {
      return (
        <>
        
          {/* DEPOIMENTOS */}
          <section style={{ padding: "90px 24px", background: "#f8fafc" }}>
            <div className="container">
              <Reveal>
                <div style={{ textAlign: "center", marginBottom: 50 }}>
                  <Title level={2}>O que dizem nossos clientes</Title>
                  <Paragraph style={{ color: "#64748b" }}>
                    Resultados reais para negócios reais.
                  </Paragraph>
                </div>
              </Reveal>

              <Row gutter={[24, 24]}>
                {[1, 2, 3].map((_, i) => (
                  <Col xs={24} md={8} key={i}>
                    <Reveal delay={i * 0.1}>
                      <Card style={{ borderRadius: 22 }}>
                        <Avatar size={52}>A</Avatar>
                        <Paragraph style={{ marginTop: 16 }}>
                          “Nosso site dobrou os contatos em poucas semanas.”
                        </Paragraph>
                        <strong>Cliente</strong>
                      </Card>
                    </Reveal>
                  </Col>
                ))}
              </Row>
            </div>
          </section>
        </>
      )
    }
    
    export default TestimonialPage