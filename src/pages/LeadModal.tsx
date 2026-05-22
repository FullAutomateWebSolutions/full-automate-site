import { Modal, Form, Input, Button, Typography, message } from "antd";
import { useEffect, useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../services/firebase";

const { Title, Paragraph } = Typography;

export default function LeadModal() {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    const alreadySeen = localStorage.getItem("lead_modal_seen");
    if (alreadySeen) return;
    const timer = setTimeout(() => { setOpen(true); localStorage.setItem("lead_modal_seen", "true");}, 6000); 
    return () => clearTimeout(timer);
  }, []);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/no-explicit-any
  async function onFinish(values: any) {
    await addDoc(collection(db, "leads"), {
      ...values,
      source: "modal",
      createdAt: serverTimestamp(),
    });

    message.success("Recebido! Vamos entrar em contato.");
    setOpen(false);
  }

  return (
    <Modal open={open} onCancel={() => setOpen(false)} footer={null}  centered width={420} >
      <div style={{ textAlign: "center" }}>
        <Title level={3}>
          Receba uma proposta gratuita
        </Title>
        <Paragraph>
          Descubra como podemos aumentar suas vendas com tecnologia.
        </Paragraph>
      </div>

      <Form layout="vertical" form={form} onFinish={onFinish}>
        <Form.Item
          name="nome"
          rules={[{ required: true, message: "Informe seu nome" }]}
        >
          <Input size="large" placeholder="Seu nome" />
        </Form.Item>

        <Form.Item
          name="telefone"
          rules={[{ required: true, message: "Informe seu WhatsApp" }]}
        >
          <Input size="large" placeholder="Seu WhatsApp" />
        </Form.Item>

        <Button type="primary" htmlType="submit" block size="large">
          Quero minha proposta
        </Button>

        <Paragraph
          style={{
            fontSize: 12,
            marginTop: 10,
            textAlign: "center",
          }}
        >
           Sem spam - resposta rápida
        </Paragraph>
      </Form>
    </Modal>
  );
}