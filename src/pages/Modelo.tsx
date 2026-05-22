import React from "react";
import { Card, Col, Flex, Row, Typography } from "antd";
import Features from "../components/Features";
import StepsPage from "../components/StepsPage";
import Integracoes from "../components/Integracoes";

const cardStyle: React.CSSProperties = {
  width: "100%",
};

const imgStyle: React.CSSProperties = {
  border: '1px solid red',
  width: "100%",
  objectFit: "cover",
  alignContent: 'center',
  padding: 10,
};

const boxStyle: React.CSSProperties = {
  height: "1%",
  margin: "0 auto",
  width: "100%",
  padding: "14px 28px",
  background: "transparent",
  // borderRadius: 12,
  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
  border: "1px solid #f0f0f0",
  overflow: "hidden",
};

const Modelo: React.FC = () => (
  <>
    {/* <Card
      hoverable
      style={cardStyle}
      styles={{ body: { padding: 0, overflow: "hidden" } }}
    > */}
      <Row gutter={[16, 16]}  className="" style={{ ...boxStyle, border: "solid 5px red" }}>
        <Col xs={24} md={8} style={{ border: "solid 4px red" }}>
          <Flex vertical>
            <img
              draggable={false}
              alt="avatar"
              src="..//assets/logos/LOGO_TECD.png"
              style={imgStyle}
            />
            <Flex vertical style={{ padding: 24, width: 500 }}>
              <Typography.Title level={2}>
                Tecnologia que <span style={{ color: "#1677ff" }}>conecta</span>
                . Sistema que <span style={{ color: "#1677ff" }}>evolue</span>.
              </Typography.Title>

              <Typography.Text style={{ color: "#4D4D4D" }}>
                Soluções SaaS completas para integrar, automatizar e impulsionar
                o crescimento do seu negócio.
              </Typography.Text>
            </Flex>

            <Features />
          </Flex>
        </Col>

        {/* <Col xs={24} md={8} style={{border: 'solid 3px red'}}>
    
      </Col> */}
        <Col xs={24} md={8} style={{ border: "solid 2px red" }}>
          {/* LINHA 1: 1 e 2 lado a lado */}
          {/* <Row gutter={[16, 16]} style={{ border: "solid 5px green" }}> */}
          {/* <Col xs={24} md={12}> */}

          <img
            draggable={false}
            alt="avatar"
            src="..//assets/logos/pc_tecd.png"
            style={imgStyle}
          />
        </Col>

        <Col xs={24} md={8}>
          <StepsPage />
        </Col>
      </Row>
    {/* </Card> */}
   {/* <Card
      hoverable
      style={cardStyle}
      styles={{ body: { padding: 0, overflow: "hidden" } }}
    > */}
    <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
      <Col xs={24}>
        <Integracoes />
      </Col>
    </Row>
    {/* </Card> */}
    
  </>
);
export default Modelo;
