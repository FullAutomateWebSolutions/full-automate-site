import {
  Card,
  Form,
  Input,
  Button,
  Space,
  message,
} from "antd";

import {
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";

import {
  doc,
  setDoc,
} from "firebase/firestore";

import { db } from "../../services/firebase";

export default function ServicesForm() {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    const services =
      values.services?.filter(
        (item: any) =>
          item?.title || item?.description
      ) || [];

    await setDoc(
      doc(db, "siteContent", "home"),
      { services },
      { merge: true }
    );

    message.success("Serviços salvos!");
  };

  return (
    <Card title="Editar Serviços">
      <Form
        layout="vertical"
        form={form}
        onFinish={onFinish}
      >
        <Form.List name="services">
          {(fields, { add, remove }) => (
            <>
              {fields.map(
                ({ key, name }) => (
                  <Card
                    key={key}
                    style={{
                      marginBottom: 16,
                    }}
                  >
                    <Form.Item
                      label="Título"
                      name={[name, "title"]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Descrição"
                      name={[
                        name,
                        "description",
                      ]}
                    >
                      <Input.TextArea rows={3} />
                    </Form.Item>

                    <Button
                      danger
                      icon={
                        <MinusCircleOutlined />
                      }
                      onClick={() =>
                        remove(name)
                      }
                    >
                      Remover
                    </Button>
                  </Card>
                )
              )}

              <Button
                type="dashed"
                block
                icon={<PlusOutlined />}
                onClick={() => add()}
              >
                Adicionar Serviço
              </Button>
            </>
          )}
        </Form.List>

        <Space
          style={{
            marginTop: 20,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
          >
            Salvar Serviços
          </Button>
        </Space>
      </Form>
    </Card>
  );
}