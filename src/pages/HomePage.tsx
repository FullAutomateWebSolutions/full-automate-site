import {
  Typography,
  Button,
  Row,
  Col,
  Card,
  Space,
  Tag,
  Form,
  Input,
  Select,
} from "antd";
import { motion } from "framer-motion";
import { Statistic, Avatar, Image } from "antd";
const { Title, Paragraph } = Typography;
import { Helmet } from "react-helmet-async";

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import { eventTrack } from "../services/analytics";

const services = [
  "Sites Profissionais",
  "ERP Web",
  "Automação",
  "Landing Pages",
  "Integrações",
  "CRM Empresarial",
];

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

export default function HomePage() {
  const [form] = Form.useForm();

  const [content, setContent] = useState<any>({});

  const services = content.services || [
    {
      title: "Sites Profissionais",
      description: "Projetos premium.",
    },
  ];
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

  const onFinish = (values: any) => {
    eventTrack(
  "submit_form",
  "lead",
  "home_form"
);
    const texto = `
Olá, vim pelo site.

Nome: ${values.nome}
WhatsApp: ${values.telefone}
Empresa: ${values.empresa || "-"}
Serviço: ${values.servico || "-"}
Mensagem: ${values.mensagem || "-"}
  `;

    const url = `https://wa.me/5511981007578?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  };
  return (
    <>
      <Helmet>
        <title>Full Automate | Sites e Sistemas Profissionais</title>

        <meta
          name="description"
          content="Criamos sites, sistemas, ERP e automações para empresas crescerem com tecnologia moderna."
        />

        <meta property="og:title" content="Full Automate" />

        <meta
          property="og:description"
          content="Sites e sistemas premium para empresas."
        />
      </Helmet>

      <div>
        <div>
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

                      <Paragraph>
                        Gestão moderna para empresas modernas.
                      </Paragraph>

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

          {/* SERVIÇOS */}
          <section style={{ padding: "90px 24px" }}>
            <div className="container">
              <div style={{ textAlign: "center", marginBottom: 50 }}>
                <Title level={2}>Soluções sob medida</Title>

                <Paragraph style={{ color: "#64748b" }}>
                  Tecnologia aplicada ao crescimento do seu negócio.
                </Paragraph>
              </div>

              <Row gutter={[24, 24]}>
                {services.map((item: any, index: any) => (
                  <Col xs={24} sm={12} md={8} key={item}>
                    <motion.div
                      whileInView={{ opacity: 1, y: 0 }}
                      initial={{ opacity: 0, y: 30 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                      }}
                    >
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
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </div>
          </section>
          {/* FORMULÁRIO LEAD */}
          <section
            style={{
              padding: "100px 24px",
              background: "#f8fafc",
            }}
          >
            <div className="container">
              <Row gutter={[48, 48]} align="middle">
                <Col xs={24} md={10}>
                  <Title level={2}>Solicite uma proposta estratégica</Title>

                  <Paragraph
                    style={{
                      fontSize: 17,
                      color: "#64748b",
                    }}
                  >
                    Conte seu objetivo e retornaremos com a melhor solução para
                    acelerar sua empresa.
                  </Paragraph>
                </Col>

                <Col xs={24} md={14}>
                  <Card
                    style={{
                      borderRadius: 24,
                      border: "none",
                      boxShadow: "0 20px 60px rgba(0,0,0,.06)",
                    }}
                  >
                    <Form layout="vertical" form={form} onFinish={onFinish}>
                      <Row gutter={16}>
                        <Col xs={24} md={12}>
                          <Form.Item
                            label="Nome"
                            name="nome"
                            rules={[{ required: true }]}
                          >
                            <Input size="large" />
                          </Form.Item>
                        </Col>

                        <Col xs={24} md={12}>
                          <Form.Item
                            label="WhatsApp"
                            name="telefone"
                            rules={[{ required: true }]}
                          >
                            <Input size="large" />
                          </Form.Item>
                        </Col>
                      </Row>

                      <Form.Item label="Empresa" name="empresa">
                        <Input size="large" />
                      </Form.Item>

                      <Form.Item label="Serviço desejado" name="servico">
                        <Select
                          size="large"
                          options={[
                            { label: "Site", value: "site" },
                            { label: "Sistema", value: "sistema" },
                            { label: "ERP", value: "erp" },
                            { label: "Automação", value: "automacao" },
                          ]}
                        />
                      </Form.Item>

                      <Form.Item label="Mensagem" name="mensagem">
                        <Input.TextArea rows={4} />
                      </Form.Item>

                      <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                        block
                      >
                        Solicitar Proposta
                      </Button>
                    </Form>
                  </Card>
                </Col>
              </Row>
            </div>
          </section>
          {/* CTA FINAL */}
          <motion.section
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              padding: "110px 24px",
              background: "#0f172a",
              color: "#fff",
              textAlign: "center",
            }}
          >
            <div className="container">
              <Title style={{ color: "#fff" }}>
                Vamos construir algo grande?
              </Title>

              <Paragraph
                style={{
                  color: "#cbd5e1",
                  fontSize: 18,
                  maxWidth: 700,
                  margin: "0 auto 32px",
                }}
              >
                Fale conosco e receba uma proposta estratégica para acelerar sua
                empresa.
              </Paragraph>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button type="primary" size="large">
                  Falar no WhatsApp
                </Button>
              </motion.div>
            </div>
          </motion.section>

          {/* PROVAS SOCIAIS */}
          <section
            style={{
              padding: "70px 24px",
              background: "#ffffff",
            }}
          >
            <div className="container">
              <Row gutter={[24, 24]}>
                <Col xs={24} sm={8}>
                  <Card
                    bordered={false}
                    style={{
                      borderRadius: 22,
                      textAlign: "center",
                    }}
                  >
                    <Statistic
                      title="Projetos Entregues"
                      value={120}
                      suffix="+"
                    />
                  </Card>
                </Col>

                <Col xs={24} sm={8}>
                  <Card
                    bordered={false}
                    style={{
                      borderRadius: 22,
                      textAlign: "center",
                    }}
                  >
                    <Statistic
                      title="Empresas Atendidas"
                      value={40}
                      suffix="+"
                    />
                  </Card>
                </Col>

                <Col xs={24} sm={8}>
                  <Card
                    bordered={false}
                    style={{
                      borderRadius: 22,
                      textAlign: "center",
                    }}
                  >
                    <Statistic title="Satisfação" value={98} suffix="%" />
                  </Card>
                </Col>
              </Row>
            </div>
          </section>

          {/* DEPOIMENTOS */}
          <section
            style={{
              padding: "90px 24px",
              background: "#f8fafc",
            }}
          >
            <div className="container">
              <div
                style={{
                  textAlign: "center",
                  marginBottom: 50,
                }}
              >
                <Title level={2}>O que dizem nossos clientes</Title>

                <Paragraph style={{ color: "#64748b" }}>
                  Resultados reais para negócios reais.
                </Paragraph>
              </div>

              <Row gutter={[24, 24]}>
                <Col xs={24} md={8}>
                  <Card style={{ borderRadius: 22 }}>
                    <Avatar size={52}>A</Avatar>

                    <Paragraph style={{ marginTop: 16 }}>
                      “Nosso site dobrou os contatos em poucas semanas.”
                    </Paragraph>

                    <strong>André Silva</strong>
                  </Card>
                </Col>

                <Col xs={24} md={8}>
                  <Card style={{ borderRadius: 22 }}>
                    <Avatar size={52}>M</Avatar>

                    <Paragraph style={{ marginTop: 16 }}>
                      “Sistema moderno e atendimento excelente.”
                    </Paragraph>

                    <strong>Mariana Costa</strong>
                  </Card>
                </Col>

                <Col xs={24} md={8}>
                  <Card style={{ borderRadius: 22 }}>
                    <Avatar size={52}>R</Avatar>

                    <Paragraph style={{ marginTop: 16 }}>
                      “Automatizamos processos e ganhamos tempo.”
                    </Paragraph>

                    <strong>Rafael Lima</strong>
                  </Card>
                </Col>
              </Row>
            </div>
          </section>

          {/* CASES / PORTFÓLIO */}
          <section
            style={{
              padding: "100px 24px",
              background: "#ffffff",
            }}
          >
            <div className="container">
              <div
                style={{
                  textAlign: "center",
                  marginBottom: 56,
                }}
              >
                <Title level={2}>Projetos que geram resultado</Title>

                <Paragraph style={{ color: "#64748b" }}>
                  Alguns trabalhos desenvolvidos para empresas crescerem.
                </Paragraph>
              </div>

              <Row gutter={[24, 24]}>
                {cases.map((item: any, index: any) => (
              
                <Col xs={24} md={8}>
                  <Card
                    hoverable
                    style={{ borderRadius: 22 }}
                    cover={
                      <Image
                        preview={false}
                       src={item.image}
                      />
                    }
                  >
                    <Space wrap>
                      <Tag color="blue">Site</Tag>
                      <Tag color="green">SEO</Tag>
                    </Space>

                    <Title level={4} style={{ marginTop: 16 }}>
                      {/* Empresa de Serviços */}
                      {item.description}
                    </Title>

                    <Paragraph>
                      {item.description}
                      {/* Novo site institucional com foco em geração de leads. */}
                    </Paragraph>
                  </Card>
                </Col>
))}
                <Col xs={24} md={8}>
                  <Card
                    hoverable
                    style={{ borderRadius: 22 }}
                    cover={
                      <Image
                        preview={false}
                        src="https://placehold.co/600x380"
                      />
                    }
                  >
                    <Space wrap>
                      <Tag color="purple">ERP</Tag>
                      <Tag color="cyan">Dashboard</Tag>
                    </Space>

                    <Title level={4} style={{ marginTop: 16 }}>
                      Sistema de Gestão
                    </Title>

                    <Paragraph>
                      Painel completo para vendas, estoque e relatórios.
                    </Paragraph>
                  </Card>
                </Col>

                <Col xs={24} md={8}>
                  <Card
                    hoverable
                    style={{ borderRadius: 22 }}
                    cover={
                      <Image
                        preview={false}
                        src="https://placehold.co/600x380"
                      />
                    }
                  >
                    <Space wrap>
                      <Tag color="orange">Automação</Tag>
                      <Tag color="gold">WhatsApp</Tag>
                    </Space>

                    <Title level={4} style={{ marginTop: 16 }}>
                      Atendimento Inteligente
                    </Title>

                    <Paragraph>
                      Fluxos automáticos que aumentaram conversões.
                    </Paragraph>
                  </Card>
                </Col>
              </Row>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
