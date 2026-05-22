
const LogoCarousel = () => {
  return (
    <>
      <div
        className="brands-slider"
        onMouseDown={(e) => {
          e.currentTarget.style.cursor = "grabbing";
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.cursor = "grab";
        }}
      ></div>
      <section className="brands-section">
        <div className="brands-title">
          Empresas que confiam em soluções modernas
        </div>
 
        <div className="brands-slider">
          <div className="brands-track">
            <img src="..//assets/logos/ifood.jpg" />
            <img src="..//assets/logos/cornershop.jpg" />
            <img src="..//assets/logos/GPA.jpg" />
            <img src="..//assets/logos/magalu.jpg" />
            <img src="..//assets/logos/mercadolivre.jpg" />
            <img src="..//assets/logos/pagarme.jpg" />

            <img src="/logos/pix.jpg" />
            {/* <img src="/logos/meta.png" />
            <img src="/logos/shopify.png" />
            <img src="/logos/microsoft.png" />
            <img src="/logos/amazon.png" />
            <img src="/logos/stripe.png" /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default LogoCarousel;
