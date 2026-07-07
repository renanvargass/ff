import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

const LINKS = [
  { href: "#cronologia", label: "Cronologia" },
  { href: "#herois", label: "Heróis" },
  { href: "#viloes", label: "Vilões" },
  { href: "#armas", label: "Armas" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`navbar ${scrolled ? "is-scrolled" : ""}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="navbar-inner container">
        <a href="#top" className="navbar-brand">
          <span className="navbar-brand-mark" />
          FFVII <span>COMPILATION</span>
        </a>

        <nav className="navbar-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className={`navbar-burger ${open ? "is-open" : ""}`}
          aria-label="Abrir menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="navbar-mobile">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </motion.header>
  );
}
