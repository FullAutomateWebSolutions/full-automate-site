import {
  Typography,
  Row,
  Col,
  Card,
} from "antd";
const { Title, Paragraph } = Typography;
import { Reveal } from '../hooks/useReveal'
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";

const ServicePage = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/no-explicit-any
      const [content, setContent] = useState<any>({});
      const services = content.services || [
    {
      title: "Sites Profissionais",
      description: "Projetos premium.",
    },
  ];

    useEffect(() => {
      async function load() {
        const ref = doc(db, "siteContent", "home");
        const snap = await getDoc(ref);
  
        if (snap.exists()) {
          setContent(snap.data());
        }
      }
  
      load();
    }, []);

  return (
    <>
        {/* SERVIÇOS */}
          <section style={{ padding: "90px 24px" }}> 
            <div className="container">
              <Reveal>
                <div style={{ textAlign: "center", marginBottom: 50 }}>
                  <Title level={2}>Soluções sob medida</Title>
                  <Paragraph style={{ color: "#64748b" }}>
                    Tecnologia aplicada ao crescimento do seu negócio.
                  </Paragraph>
                </div>
              </Reveal>

              <Row gutter={[24, 24]}>

                {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/no-explicit-any
                services.map((item: any, index: any) => (
                  <Col xs={24} sm={12} md={8} key={item}>
                    <Reveal delay={index * 0.1}>
                      <Card
                        hoverable
                        style={{
                          borderRadius: 24,
                          height: "100%",
                          border: "1px solid #f1f5f9",
                        }}
                      >
                        <Title level={4}>{item.title}</Title>
                        <Paragraph>{item.description}</Paragraph>
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

export default ServicePage