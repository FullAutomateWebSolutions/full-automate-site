import { useMemo } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import "./LogoCarouselInfinito.css";
interface IlogoCarrouselInfinito {
  type?: "intro" | "title" | "image",
  title: string,
  desc?: string,
  img?: string
};

const items: IlogoCarrouselInfinito[] = [
  { img: "..//assets/logos/cornershop.jpg", title: "Integração com Itaú (PDVs)" },
  { img: "..//assets/logos/ifood.jpg", title: "Integração com Mercado Livre" },
  { img: "..//assets/logos/GPA.jpg" , title: "Integração com iFood B2B" },
  { img: "..//assets/logos/magalu.jpg", title: "PDVs\nIntegração com sistemas de PDV" },
  { img: "..//assets/logos/mercadolivre.jpg", title: "NF-e\nDocumentos fiscais" },
  { img: "..//assets/logos/pagarme.jpg", title: "SAT / MDF-e / CT-e / NFC-e" },

];
export default function LogoCarouselInfinito() {
  // duplica para loop infinito suave
  const loopItems = useMemo(() => [...items, ...items], []);
  return (
    <>   
    {/* <section style={{  background: "#fff",padding: "30px 0",overflow: "hidden",}} >
      <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto",}}>
        <div className="marquee">
          {loopItems.map((item, index) => (<div className="item" key={index}> <><img src={item.img} alt={item.title} /></></div>))}
        </div>
      </div>
    </section> */}
    <>
      <section className="brands-section">
        <div className="brands-title"> Empresas que confiam em soluções modernas</div>
        <div className="brands-slider">
          <div className="brands-track">
               {loopItems.map((item, index) => (<div  key={index}> <><img src={item.img} alt={item.title} /></></div>))}
          </div>
        </div>
      </section>
    </>




    </>
  );
}