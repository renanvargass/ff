import { motion } from "framer-motion";
import { timeline } from "../data/compilation";
import "./Timeline.css";

export default function Timeline() {
  return (
    <section id="cronologia" className="timeline-section">
      <div className="container">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          Missões &amp; eventos
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          A <span className="accent">Cronologia</span> do Planeta
        </motion.h2>
        <p className="section-lede">
          Da criação do Projeto Jenova ao despertar de Deepground — a linha do
          tempo completa da Compilation of Final Fantasy VII.
        </p>

        <div className="timeline">
          <div className="timeline-line" aria-hidden="true" />
          {timeline.map((event, i) => (
            <motion.div
              key={event.id}
              className={`timeline-item ${i % 2 === 0 ? "is-left" : "is-right"}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="timeline-node" />
              <div className="timeline-card">
                <span className="timeline-era">{event.era}</span>
                <h3 className="timeline-title">{event.title}</h3>
                <span className="timeline-years">{event.years}</span>
                <p className="timeline-text">{event.text}</p>
                <div className="timeline-tags">
                  {event.tags.map((tag) => (
                    <span key={tag} className="pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
