import { useState } from "react";
import { Button, Grid, Space, Drawer } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import "NavBar.css";
const { useBreakpoint } = Grid;


const menuItems = [
  {
    label: "Produtos",
    items: ["ERP", "Automação", "Integrações", "Analytics"],
  },
  {
    label: "Soluções",
    items: ["E-commerce", "Financeiro", "Logística", "CRM"],
  },
  {
    label: "Recursos",
    items: ["Blog", "Documentação", "API", "Guias"],
  },
];

export default function Navbar() {
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="nav-container">
          <div className="logo">Full Automate</div>

          {!isMobile && (
            <div className="nav-links">
              {menuItems.map((menu) => (
                <div
                  key={menu.label}
                  className="nav-item"
                  onMouseEnter={() => setActiveMenu(menu.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <span>{menu.label}</span>

                  <AnimatePresence>
                    {activeMenu === menu.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="mega-menu"
                      >
                        {menu.items.map((item) => (
                          <a key={item}>{item}</a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          )}

          <Space>
            {!isMobile && (
              <>
                <Button type="text">Login</Button>
                <Button type="primary">Começar</Button>
              </>
            )}

            {isMobile && (
              <Button type="text" onClick={() => setMobileOpen(true)}>
                ☰
              </Button>
            )}
          </Space>
        </div>
      </div>

      {/* MOBILE */}
      <Drawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        placement="right"
        width={300}
      >
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          {menuItems.map((menu) => (
            <div key={menu.label}>
              <strong>{menu.label}</strong>
              <Space direction="vertical" style={{ marginTop: 8 }}>
                {menu.items.map((item) => (
                  <a key={item}>{item}</a>
                ))}
              </Space>
            </div>
          ))}

          <Button type="primary" block>
            Começar
          </Button>
        </Space>
      </Drawer>
    </>
  );
}
