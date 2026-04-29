import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import HeaderSite from "../components/layout/Header";
import FooterSite from "../components/layout/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { pageView } from "../services/analytics";

type Props = {
  dark: boolean;
  toggleTheme: () => void;
};

const { Content } = Layout;

export default function MainLayout({
  dark,
  toggleTheme,
}: Props) {


  const location = useLocation();

useEffect(() => {
  pageView(location.pathname);
}, [location.pathname]);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <HeaderSite
        dark={dark}
        toggleTheme={toggleTheme}
      />

      <Content>
        <Outlet />
      </Content>

      <FooterSite />
    </Layout>
  );
}