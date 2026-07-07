import { motion } from "framer-motion";
import "./Loader.css";

export default function Loader() {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <motion.div
        className="loader-orb"
        animate={{ rotate: 360 }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
      >
        <span className="loader-orb-core" />
      </motion.div>
      <motion.p
        className="loader-text"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        Invocando a Materia&hellip;
      </motion.p>
    </motion.div>
  );
}
