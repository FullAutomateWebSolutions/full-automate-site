import { Typography, Row, Col, Card } from "antd";
import { Image } from "antd";
import { Reveal } from "../hooks/useReveal";
const { Title, Paragraph } = Typography;
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import { useEffect, useState } from "react";

const CasesPage = () => {
  const [content, setContent] = useState<any>({});
  const cases = content.cases || [];

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
      {/* CASES */}
      <section style={{ padding: "100px 24px", background: "#ffffff" }}>
        <div className="container">
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <Title level={2}>Projetos que geram resultado</Title>
              <Paragraph style={{ color: "#64748b" }}>
                Alguns trabalhos desenvolvidos para empresas crescerem.
              </Paragraph>
            </div>
          </Reveal>

          <Row gutter={[24, 24]}>
            {cases.map((item: any, index: any) => (
              <Col xs={24} md={8} key={index}>
                <Reveal delay={index * 0.1}>
                  <Card
                    hoverable
                    style={{ borderRadius: 22 }}
                    cover={<Image preview={false} src={item.image} />}
                  >
                    <Title level={4}>{item.description}</Title>
                    <Paragraph>{item.description}</Paragraph>
                  </Card>
                </Reveal>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </>
  );
};

export default CasesPage;
