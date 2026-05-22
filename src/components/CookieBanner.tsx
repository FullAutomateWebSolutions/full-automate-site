import { useEffect, useState } from "react";
import { Button } from "antd";
import { motion } from "framer-motion";
import { loadGA } from "../services/analytics";
// import { loadPixel } from "../services/pixel";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  // ACEITAR
  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");

    loadGA();
    // loadPixel();

    setVisible(false);
  };

  // RECUSAR
  const handleReject = () => {
    localStorage.setItem("cookie_consent", "rejected");
    setVisible(false);
  };

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");

    if (consent === "accepted") {
      // já aceitou antes → carrega direto
      loadGA();
      // loadPixel();
      return;
    }

    if (!consent) {
      // ainda não decidiu → mostra banner
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 80, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="cookie-banner"
    >
      <div className="cookie-content">
        <span>
          Usamos cookies para melhorar sua experiência e analisar o tráfego.
        </span>

        <div className="cookie-actions">
          <Button size="small" onClick={handleReject}>
            Recusar
          </Button>

          <Button type="primary" size="small" onClick={handleAccept}>
            Aceitar
          </Button>
        </div>
      </div>
    </motion.div>
  );
}