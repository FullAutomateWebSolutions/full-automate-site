import {
  Typography,
  Button,
} from "antd";
const { Title, Paragraph } = Typography;
import { motion } from "framer-motion";

const CtaPage = () => {
  return (
    <>
    
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
    </>
  )
}

export default CtaPage