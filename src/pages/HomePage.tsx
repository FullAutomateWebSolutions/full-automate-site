import { Helmet } from "react-helmet-async";
import Integracoes from "../components/Integracoes";

import { Layout } from "antd";
import Hero from "./HeroPage";
import HeroPage0 from "./HeroPage0";
import CtaPage from "./CtaPage";
import ServicePage from "./ServicePage";
import LeadModal from "./LeadModal";
import CookieBanner from "../components/CookieBanner";
import TestimonialPage from "./TestimonialPage";
import LogoCarouselInfinito from "../components/Carousel/LogoCarouselInfinito";

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#1677ff",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  // width: 'calc(50% - 8px)',
  // maxWidth: 'calc(50% - 8px)',
};

export default function HomePage() {
  // const [form] = Form.useForm();
  // const onFinish = async (values: any) => {
  //   eventTrack("submit_form", "lead", "home_form");
  //   await addDoc(collection(db, "leads"), {
  //     ...values,
  //     status: "novo",
  //     createdAt: serverTimestamp(),
  //   });
  //   message.success("Recebemos sua solicitação!");
  // };
  return (
    <>
      <Helmet>
        <title>Tecd Sistemas</title>
        <meta
          name="description"
          content="Criamos sites, sistemas, ERP e automações para empresas crescerem com tecnologia moderna."
        />
        <meta property="og:title" content="Full Automate" />
        <meta
          property="og:description"
          content="Sites e sistemas premium para empresas."
        />
      </Helmet>
      <div>
        <Hero />
     
        {/* <LogoCarousel /> deletar */}
  
        <ServicePage />
        <HeroPage0 />
        <LeadModal />
        <CookieBanner />
        <TestimonialPage />
        {/* <SobrePage /> */}
        <LogoCarouselInfinito />
              <CtaPage />
        {/* <Features /> */}
        {/* <StepsPage /> */}
        <Integracoes />
        {/* <CardsFeatures /> */}
      </div>
    </>
  );
}
