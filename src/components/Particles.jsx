import { useMemo } from "react";
import "./Particles.css";

const COUNT = 34;

export default function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: COUNT }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 4,
        duration: 12 + Math.random() * 14,
        delay: Math.random() * -20,
        drift: (Math.random() - 0.5) * 120,
        opacity: 0.2 + Math.random() * 0.5,
      })),
    []
  );

  return (
    <div className="particles" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            "--drift": `${p.drift}px`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}
