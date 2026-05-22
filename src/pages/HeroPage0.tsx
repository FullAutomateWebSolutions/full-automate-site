import { Typography, Button, Row, Col, Card, Space, Tag } from "antd";
const { Title, Paragraph } = Typography;
import { useEffect, useState,useRef } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import { useScroll, useTransform, motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const HeroPage0 = () => {
  const [content, setContent] = useState<any>({});
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

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
      {/* HERO PREMIUM */}

      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        style={{
          padding: "120px 24px",
          background:
            "linear-gradient(135deg,#ffffff 0%,#eef4ff 50%,#f8fafc 100%)",
        }}
      >
        <div className="container">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} md={12}>
              <Space direction="vertical" size="large">
                <Tag color="blue">TECNOLOGIA PREMIUM</Tag>

                <Title
                  style={{
                    fontSize: 54,
                    lineHeight: 1.1,
                    margin: 0,
                  }}
                >
                  {content.heroTitle || "Sites e Sistemas que vendem mais"}
                </Title>

                <Paragraph
                  style={{
                    fontSize: 19,
                    color: "#475569",
                    maxWidth: 520,
                  }}
                >
                  {content.heroSubtitle ||
                    "Criamos soluções digitais modernas para empresas crescerem com performance, automação e presença forte."}
                </Paragraph>

                <Space wrap size="middle">
                  <motion.div
                    style={{ y }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button type="primary" size="large">
                      {content.heroButton || "Solicitar Proposta"}
                    </Button>
                    <Paragraph style={{ marginTop: 8 }}>
                      +40 empresas atendidas
                    </Paragraph>
                  </motion.div>

                  <Button size="large">Ver Projetos</Button>
                </Space>
              </Space>
            </Col>

            <Col xs={24} md={12}>
              <motion.div
                style={{ y }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <Card
                  style={{
                    borderRadius: 28,
                    border: "none",
                    minHeight: 420,
                    boxShadow: "0 30px 80px rgba(0,0,0,.08)",
                  }}
                >
                  <Title level={4}>Painel Inteligente</Title>

                  <Paragraph>Gestão moderna para empresas modernas.</Paragraph>

                  <div style={{ marginTop: 32 }}>
                    <Card style={{ marginBottom: 16 }}>Vendas +32%</Card>
                    <Card style={{ marginBottom: 16 }}>Leads +58%</Card>
                    <Card>Processos automatizados</Card>
                  </div>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </div>
      </motion.section>
    </>
  );
};

export default HeroPage0;
