import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-crater" aria-hidden="true" />

      <motion.img
        src="/images/characters/sephiroth.png"
        alt=""
        aria-hidden="true"
        className="hero-figure hero-figure--sephiroth"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 0.85, x: 0 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
      />
      <motion.img
        src="/images/characters/cloud.png"
        alt=""
        aria-hidden="true"
        className="hero-figure hero-figure--cloud"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
      />

      <div className="container hero-content">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          A cronologia completa
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.9, ease: "easeOut" }}
        >
          COMPILATION
          <span className="hero-title-of">of</span>
          <span className="hero-title-glow">FINAL FANTASY VII</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.8 }}
        >
          De Crisis Core a Dirge of Cerberus: os heróis, os vilões, as armas
          lendárias e as missões que decidiram o destino do planeta.
        </motion.p>

        <motion.div
          className="hero-cta-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.8 }}
        >
          <a href="#cronologia" className="hero-cta">
            Explorar a cronologia
          </a>
          <a href="#herois" className="hero-cta hero-cta--ghost">
            Ver personagens
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span />
      </motion.div>
    </section>
  );
}
