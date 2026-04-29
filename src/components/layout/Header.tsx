import { useState } from "react";
import {
  Layout,
  Menu,
  Button,
  Drawer,
  Grid,
  Space,
} from "antd";

import {
  MenuOutlined,
} from "@ant-design/icons";
import {
  BulbOutlined,
  MoonOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;
const { useBreakpoint } = Grid;

type Props = {
  dark: boolean;
  toggleTheme: () => void;
};

export default function HeaderSite({
  dark,
  toggleTheme,
}: Props) {
  const navigate = useNavigate();
  const screens = useBreakpoint();

  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      key: "1",
      label: "Home",
      onClick: () => navigate("/"),
    },
    {
      key: "2",
      label: "Sobre",
      onClick: () => navigate("/sobre"),
    },
    {
      key: "3",
      label: "Contato",
      onClick: () => navigate("/contato"),
    },
  ];

  const go = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <>
      <Header
        style={{
          background: "#fff",
          borderBottom: "1px solid #f0f0f0",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          paddingInline: screens.md ? 40 : 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div
          onClick={() => go("/")}
          style={{
            fontSize: screens.md ? 22 : 18,
            fontWeight: 800,
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          Full Automate
        </div>

        {/* Desktop */}
        {screens.md ? (
          <>
            <Menu
              mode="horizontal"
              selectable={false}
              items={menuItems}
              style={{
                flex: 1,
                justifyContent: "center",
                borderBottom: "none",
                minWidth: 300,
              }}
            />
<Button
  type="text"
  icon={dark ? <BulbOutlined /> : <MoonOutlined />}
  onClick={toggleTheme}
/>
            <Button type="primary" size="large">
              Orçamento
            </Button>
          </>
        ) : (
          /* Mobile */
          <Button
            type="text"
            icon={<MenuOutlined />}
            size="large"
            onClick={() => setOpen(true)}
          />
        )}
      </Header>

      {/* Drawer Mobile */}
      <Drawer
        title="Menu"
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Space
          direction="vertical"
          style={{ width: "100%" }}
          size="middle"
        >
          <Button block onClick={() => go("/")}>
            Home
          </Button>

          <Button block onClick={() => go("/sobre")}>
            Sobre
          </Button>

          <Button block onClick={() => go("/contato")}>
            Contato
          </Button>

          <Button type="primary" block>
            Orçamento
          </Button>
        </Space>
      </Drawer>
    </>
  );
}