import { useEffect, useRef } from 'react';
import './styles/globals.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Statement from './components/Statement';
import Services from './components/Services';
import About from './components/About';
import Work from './components/Work';
import Process from './components/Process';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollFeather3D from './components/ScrollFeather3D';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  return (
    <>
      <div style={{ overflowX: 'hidden', width: '100%', position: 'relative' }}>
        <Navbar />
        <main>
          <Hero />
          <Statement />
          <Services />
          <About />
          <Work />
          <Process />
          <Pricing />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
      <ScrollFeather3D />
    </>
  );
}
