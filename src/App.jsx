import Layout from './components/common/Layout';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import './styles/globals.css';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';

function App() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <Experience/>
      <Skills/>
      <Projects/>
      <Education/>
      <Contact/>
      {/* We'll add other sections here in the next steps */}
    </Layout>
  );
}

export default App;
