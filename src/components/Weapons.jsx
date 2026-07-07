import { motion } from "framer-motion";
import { weapons } from "../data/compilation";
import "./Weapons.css";

const STAT_LABELS = { poder: "Poder", alcance: "Alcance", velocidade: "Velocidade" };

const EXTRA_WEAPONS = [
  {
    id: "tsurugi",
    name: "First Tsurugi",
    owner: "Cloud Strife",
    desc: "Fusão de seis lâminas usada por Cloud em Advent Children — a evolução da Buster Sword.",
    icon: "sword",
  },
  {
    id: "cerberus",
    name: "Cerberus",
    owner: "Vincent Valentine",
    desc: "Revólver de três canos, tão preciso quanto brutal nas mãos do ex-Turk.",
    icon: "gun",
  },
  {
    id: "death-penalty",
    name: "Death Penalty",
    owner: "Vincent Valentine",
    desc: "Arma definitiva de Vincent em Dirge of Cerberus, capaz de perfurar Deepground inteiro.",
    icon: "gun",
  },
  {
    id: "rapier",
    name: "Rapier de Genesis",
    owner: "Genesis Rhapsodos",
    desc: "Lâmina elegante e veloz, tão poética quanto seu portador obcecado por LOVELESS.",
    icon: "sword",
  },
];

function WeaponIcon({ type }) {
  if (type === "gun") {
    return (
      <svg viewBox="0 0 48 24" className="weapon-icon">
        <path
          d="M2 16 L20 16 L20 8 L44 8 L44 12 L38 12 L38 20 L30 20 L30 16 L20 16 L20 20 L14 20 L14 16 L2 16 Z"
          fill="currentColor"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 48" className="weapon-icon">
      <path d="M11 2 L13 2 L13 34 L18 39 L18 42 L15 42 L12 39 L9 42 L6 42 L6 39 L11 34 Z" fill="currentColor" />
    </svg>
  );
}

export default function Weapons() {
  return (
    <section id="armas" className="weapons-section">
      <div className="container">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          Arsenal lendário
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          As <span className="accent">Armas</span> que Marcaram a Saga
        </motion.h2>
        <p className="section-lede">
          De lâminas lendárias a revólveres amaldiçoados — as armas que
          definiram cada confronto da Compilation.
        </p>

        <div className="weapons-showcase">
          {weapons.map((w, i) => (
            <motion.div
              key={w.id}
              className="weapon-panel"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <div className="weapon-panel-media">
                <img src={w.img} alt={w.name} loading="lazy" />
              </div>
              <div className="weapon-panel-body">
                <h3>{w.name}</h3>
                <span className="weapon-owner">{w.owner}</span>
                <p>{w.desc}</p>
                <div className="weapon-stats">
                  {Object.entries(w.stats).map(([key, value]) => (
                    <div className="weapon-stat" key={key}>
                      <span className="weapon-stat-label">{STAT_LABELS[key]}</span>
                      <div className="weapon-stat-track">
                        <motion.div
                          className="weapon-stat-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${value}%` }}
                          viewport={{ once: true, amount: 0.6 }}
                          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="weapons-extra">
          {EXTRA_WEAPONS.map((w, i) => (
            <motion.div
              className="weapon-extra-card"
              key={w.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="weapon-extra-icon">
                <WeaponIcon type={w.icon} />
              </div>
              <div>
                <h4>{w.name}</h4>
                <span>{w.owner}</span>
                <p>{w.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
