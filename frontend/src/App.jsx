import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./pages/Home";
import ExploreStartups from "./pages/ExploreStartups";
import JoinNow from "./pages/JoinNow";
import Navbar from "./components/Navbar";
import AccessResources from "./pages/AccessResources.jsx";

function AnimatedRoutes() {
  const location = useLocation();

  // Home keeps its own animated background
  const isHome = location.pathname === "/";

  return (
    // Only apply black background to NON-home pages
    <div className={`min-h-screen ${!isHome ? "bg-black" : ""}`}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWrapper noBackground>
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
    </div>
  );
}

function PageWrapper({ children, noBackground = false }) {
  return (
    <motion.div
      className={`min-h-screen w-full ${
        noBackground ? "" : "bg-black"
      }`}
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
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
