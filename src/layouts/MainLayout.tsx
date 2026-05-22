import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import HeaderSite from "../components/layout/Header";
import FooterSite from "../components/layout/Footer";

// import { useLocation } from "react-router-dom";
// import { useEffect } from "react";
// import { pageView } from "../services/analytics";
import Navbar from "../components/layout/Navbar";
const { Content } = Layout;

export default function MainLayout() {
// const location = useLocation();
// console.log(dark,toggleTheme());

// useEffect(() => {
//   pageView(location.pathname);
// }, [location.pathname]);

  return (
  <>
  

    <Layout style={{ minHeight: "100vh" }}>
      {/* <HeaderSite dark={dark} toggleTheme={toggleTheme}/> */}
      <Content>
        <Navbar />
        <Outlet />
      </Content>
      <FooterSite />
    </Layout>
  
    </>
  );
}