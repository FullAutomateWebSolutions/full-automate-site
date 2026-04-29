import {
  Card,
  Form,
  Input,
  Button,
  message,
} from "antd";

import {
  doc,
  setDoc,
} from "firebase/firestore";

import { db } from "../../services/firebase";

export default function HeroForm() {
  const [form] = Form.useForm();

 const onFinish = async (values: any) => {
  const cleanData = Object.fromEntries(
    Object.entries(values).filter(
      ([_, value]) =>
        value !== undefined &&
        value !== null &&
        value !== ""
    )
  );

  await setDoc(
    doc(db, "siteContent", "home"),
    cleanData,
    { merge: true }
  );

  message.success("Conteúdo salvo!");
};

  return (
    <Card title="Editar Hero">
      <Form
        layout="vertical"
        form={form}
        onFinish={onFinish}
          initialValues={{
    heroTitle: "",
    heroSubtitle: "",
    heroButton: "",
    whatsapp: "",
  }}
      >
        <Form.Item
          label="Título"
          name="heroTitle"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Subtítulo"
          name="heroSubtitle"
        >
          <Input.TextArea rows={3} />
        </Form.Item>

        <Form.Item
          label="Texto Botão"
          name="heroButton"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="WhatsApp"
          name="whatsapp"
        >
          <Input />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
        >
          Salvar
        </Button>
      </Form>
    </Card>
  );
}