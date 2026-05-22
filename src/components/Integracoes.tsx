import { Row, Col } from "antd";

const items = [
  {
    type: "intro",
    title: "INTEGRAÇÕES\nQUE IMPULSIONAM\nSEU NEGÓCIO",
    desc: "Conecte seu sistema com as principais plataformas e automação do mercado.",
  },
  {
    img: "assets/logos/iti.png",
    title: "Integração com Itaú (PDVs)",
  },
  {
    img: "/assets/logos/mercadolivre.jpg",
    title: "Integração com Mercado Livre",
  },
  {
    img: "/assets/logos/ifood.jpg",
    title: "Integração com iFood B2B",
  },
  {
    img: "/assets/logos/pdv.png",
    title: "PDVs\nIntegração com sistemas de PDV",
  },
  {
    img: "/assets/nfe.png",
    title: "NF-e\nEmissão e gestão de documentos fiscais",
  },
  {
    img: "/assets/logos/sat.png",
    title: "SAT / MDF-e / CT-e / NFC-e",
  },
  {
    img: "/assets/logos/sped.png",
    title: "SPED Fiscal, SPED Contribuições e SPED EFD",
  },
  {
    img: "/assets/logos/plus.png",
    title: "E muito mais integrações personalizadas!",
  },
];

export default function Integracoes() {
  return (
    <section
      style={{
        background: "#fff",
        padding: "30px 10px",
      }}
    >
      <div
        style={{
          maxWidth: "100%",
          margin: "0 auto",
          overflowX: "auto",
        }}
      >
        <Row
          wrap={false}
          style={{
            minWidth: 1000,
            border: "1px solid #eee",
            borderRadius: 12,
            overflow: "hidden",
            
          }}
        >
          {items.map((item, index) => (
            <Col
              key={index}
              style={{
                minWidth: 160,
                padding: 16,
                textAlign: "center",
                borderRight:
                  index !== items.length - 1 ? "1px solid #eee" : "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
             {item.type === "intro" ? (
  <div style={{ textAlign: "left" }}>
    <div
      style={{
        fontWeight: 700,
        fontSize: 14,
        whiteSpace: "pre-line",
        marginBottom: 8,
      }}
    >
      {item.title}
    </div>

    <div
      style={{
        fontSize: 12,
        color: "#666",
      }}
    >
      {item.desc}
    </div>
  </div>
) : (
  <div
    style={{
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      width: "100%",
    }}
  >
    <img
      src={item.img}
      alt=""
      style={{
        width: 100,
        height: 50,
        objectFit: "contain",
        display: "block",
        margin: "0 auto 10px",
      }}
    />

    <div
      style={{
        fontSize: 12,
        color: "#333",
        whiteSpace: "pre-line",
      }}
    >
      {item.title}
    </div>
  </div>
)}
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
