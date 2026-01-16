import { motion } from "framer-motion";

export default function About() {
 
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.1 } },
  };


  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };

  
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="py-24 flex flex-col items-center relative z-10 px-6 font-sans"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
     
      <motion.h2
        className="text-4xl sm:text-5xl lg:text-5xl font-bold text-center mb-8"
        variants={headingVariants}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">
          About Us
        </span>
      </motion.h2>

     
      <motion.p
        className="text-center text-white/90 mb-6 font-medium max-w-3xl text-lg sm:text-xl"
        variants={paragraphVariants}
      >
        Our mission is to empower startups by cultivating a dynamic ecosystem
        where innovation, collaboration, and growth converge.
      </motion.p>

      <motion.p
        className="text-center text-white/80 mb-6 font-medium max-w-3xl text-lg sm:text-xl"
        variants={paragraphVariants}
      >
        We strive to connect visionary entrepreneurs with the resources,
        mentorship, and networks they need to transform bold ideas into
        thriving ventures.
      </motion.p>

      <motion.p
        className="text-center text-white/70 font-medium max-w-3xl text-lg sm:text-xl"
        variants={paragraphVariants}
      >
        Through strategic partnerships, community engagement, and tailored
        support, we aim to break down barriers, accelerate progress, and
        champion the next generation of innovators.
      </motion.p>
    </motion.section>
  );
}
