import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Leadership from "./components/Leadership";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main id="top" className="container">
        <Hero />
        <div className="rule" role="separator" aria-hidden="true" />
        <Experience />
        <div className="rule" role="separator" aria-hidden="true" />
        <Projects />
        <div className="rule" role="separator" aria-hidden="true" />
        <Skills />
        <div className="rule" role="separator" aria-hidden="true" />
        <About />
        <div className="rule" role="separator" aria-hidden="true" />
        <Leadership />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
