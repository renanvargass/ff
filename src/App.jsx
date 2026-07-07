import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import Particles from "./components/Particles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Heroes from "./components/Heroes";
import Villains from "./components/Villains";
import Weapons from "./components/Weapons";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <Particles />
      <Navbar />
      <main>
        <Hero />
        <Timeline />
        <Heroes />
        <Villains />
        <Weapons />
      </main>
      <Footer />
    </>
  );
}

export default App;
