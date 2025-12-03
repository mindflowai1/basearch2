import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Architect from './components/Architect';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>

        {/* Section Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />

        <section id="about">
          <About />
        </section>

        {/* Section Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />

        <section id="architect">
          <Architect />
        </section>

        {/* Section Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />

        <section id="services">
          <Services />
        </section>

        {/* Section Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />

        <section id="portfolio">
          <Portfolio />
        </section>

        {/* Section Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
