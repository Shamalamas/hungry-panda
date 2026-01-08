import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import MagicLinkAlertSignInPage from "../components/Login";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function JoinNow() {
  const [shouldExit, setShouldExit] = useState(false);
  const navigate = useNavigate();

  const handleEmailSubmit = () => {
    setShouldExit(true);
    setTimeout(() => {
      navigate("/ExploreStartups");
    }, 400); // match transition duration
  };

  return (
    <motion.div
      className="w-full h-full min-h-screen"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <MagicLinkAlertSignInPage onEmailSubmit={handleEmailSubmit} />
    </motion.div>
  );
}
