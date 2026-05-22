import { Card, Form, Input, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { db, storage } from "../../services/firebase";

export default function CasesForm() {
  const [form] = Form.useForm();
  const onFinish = async (values: any) => {
    let imageUrl = "";
    const file = values.image?.file?.originFileObj;
    if (file) {
      const storageRef = ref(storage, `cases/${Date.now()}-${file.name}`);
      await uploadBytes(storageRef, file);
      imageUrl = await getDownloadURL(storageRef);
    }

    const newCase = {
      title: values.title,
      description: values.description,
      image: imageUrl,
    };

    await setDoc(
                  doc(db, "siteContent", "home"),
                  {cases: [newCase] },
                  { merge: true },
     );

    message.success("Case salvo!");
    form.resetFields();
  };

  return (
    <Card title="Novo Case">
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item label="Título" name="title">
          <Input />
        </Form.Item>

        <Form.Item label="Descrição" name="description">
          <Input.TextArea rows={3} />
        </Form.Item>

        <Form.Item label="Imagem" name="image">
          <Upload beforeUpload={() => false} maxCount={1}>
            <Button icon={<UploadOutlined />}>Selecionar Imagem</Button>
          </Upload>
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Salvar Case
        </Button>
      </Form>
    </Card>
  );
}
