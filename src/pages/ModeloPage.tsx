import { Button, Typography, Row, Col } from "antd";
import { motion } from "framer-motion";
import { useParallax } from "../hooks/useParallax";

const { Title, Paragraph } = Typography;

export default function ModeloPage() {
  const { pos, handleMove } = useParallax();
  return (
    <section className="hero-section" onMouseMove={handleMove}> 
      {/* GLOW BACKGROUND */}
      <div className="hero-glow" />
      <div
        className="cursor-glow"
        style={{
          transform: `translate(${pos.x * 5}px, ${pos.y * 5}px)`,
        }}
      />
      <Row
        align="middle"
        justify="center"
        gutter={[40, 40]}
        style={{ maxWidth: 1200, margin: "0 auto" }}
      >
        {/* TEXTO */}
        <Col xs={24} md={12}>
          <motion.div
            animate={{
              x: pos.x * 0.3,
              y: pos.y * 0.3,
            }}
            transition={{ type: "spring", stiffness: 30 }}
          >
            {/* BADGE */}
            <div className="hero-badge">
               Especialistas em sistemas empresariais
            </div>

     
            {/* SUB */}
            <Paragraph className="hero-sub">
              Criamos sites e sistemas modernos que aumentam suas vendas,
              automatizam processos e fazem sua empresa crescer.
            </Paragraph>

        

          </motion.div>
        </Col>

        {/* IMAGEM */}
        <Col xs={24} md={12}>
          <motion.img
            src="..//assets/logos/pc_tecd.png"
            //  src="..//assets/logos/LOGO_TECD.png"
            // className="hero-image"
            animate={{
              x: pos.x,
              y: pos.y,
            }}
            transition={{
              type: "spring",
              stiffness: 40,
            }}
          />
        </Col>
      </Row>
    </section>
  );
}
