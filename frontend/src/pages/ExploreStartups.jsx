import { motion } from "framer-motion";
import StartupCards from "../components/StartupCards";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function ExploreStartups() {
  return (
    <motion.div
      className="w-full h-full min-h-screen"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <StartupCards />
    </motion.div>
  );
}
