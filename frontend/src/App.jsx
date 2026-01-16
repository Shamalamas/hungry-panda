import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

import Home from "./pages/Home";
import ExploreStartups from "./pages/ExploreStartups";
import JoinNow from "./pages/JoinNow";
import AccessResources from "./pages/AccessResources.jsx";
import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/AnimatedBackground";

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/ExploreStartups"
          element={
            <PageWrapper>
              <ExploreStartups />
            </PageWrapper>
          }
        />
        <Route
          path="/JoinNow"
          element={
            <PageWrapper>
              <JoinNow />
            </PageWrapper>
          }
        />
        <Route
          path="/AccessResources"
          element={
            <PageWrapper>
              <AccessResources />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      className="relative z-10 min-h-screen w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      }}
      exit={{
        opacity: 0,
        y: -20,
        transition: { duration: 0.4, ease: "easeIn" },
      }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedBackground />
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
