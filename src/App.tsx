import WhatsAppFloat from "./components/common/WhatsAppFloat";
import { useEffect } from "react";
import { ConfigProvider } from "antd";
import AppRoutes from "./routes/AppRoutes";
import { initAnalytics } from "./services/analytics";

export default function App() {
  // const [dark, setDark] = useState(false);

  // useEffect(() => {
  //   const saved = localStorage.getItem("theme");
  //   // eslint-disable-next-line react-hooks/set-state-in-effect
  //   if (saved === "dark") setDark(true);
  // }, []);

  useEffect(() => {
    initAnalytics();
  }, []);

  // const toggleTheme = () => {
  //   const next = !dark;
  //   setDark(next);
  //   localStorage.setItem("theme",next ? "dark" : "light");
  // };

  return (
    <ConfigProvider
      theme={{
        // algorithm: dark ? theme.darkAlgorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: "#1677ff",
          borderRadius: 18,
        },
      }}
    >
      <AppRoutes
      // dark={dark}
      // toggleTheme={toggleTheme}
      />
      <WhatsAppFloat />
    </ConfigProvider>
  );
}
