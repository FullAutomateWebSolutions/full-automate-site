import {
  Card,
  Form,
  Input,
  Button,
  Typography,
  message,
} from "antd";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

export default function LoginPage() {
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      await signInWithEmailAndPassword(
        auth,
        values.email,
        values.senha
      );

      message.success("Login realizado");
      navigate("/admin/dashboard");
    } catch {
      message.error("Login inválido");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Card style={{ width: 380, borderRadius: 22 }}>
        <Title level={3}>Painel Admin</Title>

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Email" name="email">
            <Input size="large" />
          </Form.Item>

          <Form.Item label="Senha" name="senha">
            <Input.Password size="large" />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            block
            size="large"
          >
            Entrar
          </Button>
        </Form>
      </Card>
    </div>
  );
}