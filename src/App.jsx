import AmbientBackdrop from "./components/AmbientBackdrop";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import SectionDivider from "./components/SectionDivider";
import About from "./sections/About";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Skills from "./sections/Skills";

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink font-sans text-body antialiased">
      <AmbientBackdrop />
      <ScrollProgress />
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[90] focus:rounded-md focus:bg-signal focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="content" className="relative z-10 overflow-x-clip">
        <Hero />
        <SectionDivider />
        <div className="section-rosso-band">
          <About />
        </div>
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <div className="section-rosso-band">
          <Certificates />
        </div>
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <div className="section-rosso-band">
          <Projects />
        </div>
        <SectionDivider />
        <Services />
        <SectionDivider />
        <div className="section-rosso-band">
          <Contact />
        </div>
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
