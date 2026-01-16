import { motion } from "framer-motion";

export default function Hero() {

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } },
  };


  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

 
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.main
      className="relative z-10 pt-56 px-6 text-white font-sans"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div
        className="max-w-5xl mx-auto text-center flex flex-col gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <header>
     
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-2"
            variants={textVariants}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">
              Welcome to the Entrepreneurship Hub
            </span>
          </motion.h1>

         
          <motion.p
            className="text-indigo-200/60 text-lg sm:text-xl md:text-2xl font-medium max-w-3xl mx-auto"
            variants={textVariants}
          >
            Empowering Innovators, Connecting Startups, and Fueling Growth.
          </motion.p>
        </header>
      </motion.div>
    </motion.main>
  );
}
