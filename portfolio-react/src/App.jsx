import Navigation from './components/common/Navigation';
import Hero from './components/Hero/Hero';
import Stats from './components/Hero/Stats';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/common/Footer';

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
