import { motion } from "framer-motion";
import { villains } from "../data/compilation";
import CharacterCard from "./CharacterCard";
import "./Roster.css";

export default function Villains() {
  return (
    <section id="viloes" className="roster-section roster-section--dark">
      <div className="roster-veil" aria-hidden="true" />
      <div className="container">
        <motion.p
          className="eyebrow eyebrow--crimson"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          Shinra, Jenova &amp; Deepground
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          Vilões &amp; <span className="accent accent--crimson">Antagonistas</span>
        </motion.h2>
        <p className="section-lede">
          Das ambições corporativas da Shinra à loucura de um deus caído —
          as forças que ameaçaram o planeta em cada capítulo da saga.
        </p>

        <div className="roster-grid">
          {villains.map((v, i) => (
            <CharacterCard key={v.id} character={v} variant="villain" index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
