import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main id="top" className="container">
        <Hero />
        <div className="rule" role="separator" aria-hidden="true" />
        <Projects />
        <div className="rule" role="separator" aria-hidden="true" />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
