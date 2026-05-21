import './styles/globals.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Work from './components/Work';
import Process from './components/Process';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollFeather3D from './components/ScrollFeather3D';

export default function App() {
  return (
    <>
      <div style={{ overflowX: 'hidden', width: '100%', position: 'relative' }}>
        <Navbar />
        <main>
          <Hero />
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
