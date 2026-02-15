import { motion } from "framer-motion";

// I've increased the default delay to 0.3s 
// and slightly increased duration for a smoother feel.
export const Reveal = ({ children, delay = 0.3 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, // Slowed down from 0.6 to 0.8
        delay: delay, 
        ease: "easeOut" 
      }}
    >
      {children}
    </motion.div>
  );
};