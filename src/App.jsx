import { motion, useScroll } from "framer-motion";
import { Routes, Route, Navigate } from "react-router-dom";
import Router from "./Router";

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          bottom: "0",
          left: "0",
          right: "0",
          height: "5px",
          background: "#2234ae",
          transformOrigin: "0%",
          zIndex: "9999",
        }}
      />
      <Routes>
        <Route path="/:id" element={<Router />} exact />
        <Route
          path="*"
          element={<Navigate to="/-NK8IvCI_WNE_CDEJSrX" replace />}
        />
      </Routes>
    </>
  );
}

export default App;
