import { FloatButton } from "antd";
import { WhatsAppOutlined } from "@ant-design/icons";
import { eventTrack } from "../../services/analytics";
export default function WhatsAppFloat() {

  eventTrack(
  "click_whatsapp",
  "lead",
  "float_button"
);
  const openWhats = () => {
    const text =
      "Olá, vim pelo site e gostaria de uma proposta.";

    window.open(
      `https://wa.me/5511981007578?text=${encodeURIComponent(
        text
      )}`,
      "_blank"
    );
  };

  return (
    <FloatButton
      type="primary"
      icon={<WhatsAppOutlined />}
      tooltip="Fale conosco agora"
      onClick={openWhats}
    />
  );
}