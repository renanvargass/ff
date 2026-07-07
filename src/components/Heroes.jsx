import { motion } from "framer-motion";
import { heroes } from "../data/compilation";
import CharacterCard from "./CharacterCard";
import "./Roster.css";

export default function Heroes() {
  return (
    <section id="herois" className="roster-section">
      <div className="container">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          AVALANCHE &amp; aliados
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          Heróis do <span className="accent">Planeta</span>
        </motion.h2>
        <p className="section-lede">
          Os que se levantaram contra a Shinra e contra Sephiroth para
          proteger a última esperança do planeta.
        </p>

        <div className="roster-grid">
          {heroes.map((h, i) => (
            <CharacterCard key={h.id} character={h} variant="hero" index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
