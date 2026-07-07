import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import "./CharacterCard.css";

export default function CharacterCard({ character, variant = "hero", index = 0 }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      ref={ref}
      className={`char-card char-card--${variant}`}
      style={{
        "--accent": character.accent,
        rotateX,
        rotateY,
        transformPerspective: 900,
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08, ease: "easeOut" }}
    >
      <div className="char-card-glow" />
      <div className="char-card-media">
        <img src={character.img} alt={character.name} loading="lazy" />
      </div>

      <div className="char-card-body">
        <span className="char-card-role">{character.role}</span>
        <h3 className="char-card-name">{character.name}</h3>
        <span className="char-card-weapon">{character.weapon}</span>
        <p className="char-card-bio">{character.bio}</p>
      </div>
    </motion.article>
  );
}
