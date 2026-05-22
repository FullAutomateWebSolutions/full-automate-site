// import { useEffect, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "antd";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [hidden, setHidden] = useState(false);
//   const [open, setOpen] = useState(false);
//   const lastScroll = useRef(0);
//   useEffect(() => {
//     const handleScroll = () => {
//       const current = window.scrollY;
//       setScrolled(current > 20);
//       if (current > lastScroll.current && current > 100) {
//         setHidden(true);
//       } else {
//         setHidden(false);
//       }
//       lastScroll.current = current;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       {/* NAVBAR */}
//       <motion.header
//         initial={{ y: 0 }}
//         animate={{ y: hidden ? -100 : 0 }}
//         transition={{ duration: 0.35, ease: "easeInOut" }}
//         className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
//       >
//         <div className="nav-container">
//           <div className="logo">Full Automate</div>
//           <div className="nav-links">
//             <a href="#">Início</a>
//             <a href="#">Serviços</a>
//             <a href="#">Projetos</a>
//             <a href="#">Contato</a>
//           </div>

//           <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//             <Button type="primary">WhatsApp</Button>

//             <div
//               className="mobile-toggle"
//               onClick={() => setOpen(!open)}
//             >
//               <span className={open ? "line open" : "line"} />
//               <span className={open ? "line open" : "line"} />
//             </div>
//           </div>
//         </div>
//       </motion.header>

//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="mobile-overlay"
//             onClick={() => setOpen(false)}
//           >
//             <motion.div
//               initial={{ y: -50, opacity: 0, scale: 0.98 }}
//               animate={{ y: 0, opacity: 1, scale: 1 }}
//               exit={{ y: -50, opacity: 0, scale: 0.98 }}
//               transition={{ duration: 0.3 }}
//               className="mobile-menu"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {["Início", "Serviços", "Projetos", "Contato"].map(
//                 (item, i) => (
//                   <motion.a
//                     key={item}
//                     href="#"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: i * 0.08 }}
//                     onClick={() => setOpen(false)}
//                   >
//                     {item}
//                   </motion.a>
//                 )
//               )}

//               <Button
//                 type="primary"
//                 size="large"
//                 style={{ marginTop: 20 }}
//               >
//                 Falar no WhatsApp
//               </Button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }


import { useEffect, useRef, useState } from "react";
import { Button, Drawer, Grid, Space } from "antd";
import { AnimatePresence, motion } from "framer-motion";

const { useBreakpoint } = Grid;

export default function Navbar() {
  const screens = useBreakpoint();

  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      setScrolled(current > 20);

      if (current > lastScroll.current && current > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScroll.current = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isMobile = !screens.md;

  return (
    <>
    <AnimatePresence>
      <motion.header
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3 }}
        className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
      >
        <div className="nav-container">
          <div className="logo">

            <img src="..//assets/logos/LOGO_TECD_CROMO.png" width='80' alt="" />

          </div>

          {/* DESKTOP */}
          {!isMobile && (
            <Space size="large" className="nav-links" >
              <a href="#">Início</a>
              <a href="#">Serviços</a>
              <a href="#">Projetos</a>
              <a href="#">Contato</a>
              {/* <Button type="primary">WhatsApp</Button> */}
            </Space>
          )}

          {/* MOBILE */}
          {isMobile && (
            <Button type="text" className="nav-links" onClick={() => setOpen(true)}>
              ☰
            </Button>
          )}
        </div>
      </motion.header>

      {/* DRAWER MOBILE */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        width={280}
      >
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <a onClick={() => setOpen(false)}>Início</a>
          <a onClick={() => setOpen(false)}>Serviços</a>
          <a onClick={() => setOpen(false)}>Projetos</a>
          <a onClick={() => setOpen(false)}>Contato</a>

          <Button type="primary" block>
            Falar no WhatsApp
          </Button>
        </Space>
      </Drawer>
      </AnimatePresence>
    </>
  );
}