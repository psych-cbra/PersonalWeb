import { Navbar } from '@/layout/Navbar';
import { Hero } from '@/Sections/Hero';
import { About } from '@/Sections/About';
import { Experience } from '@/Sections/Experience';
import { Project } from '@/Sections/Project';
import { Contact } from '@/Sections/Contact';
import { Footer } from './layout/Footer';



function App() {
  return <div className="min-h-screen overflow-hidden">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Experience />
      <Project />
      <Contact />
    </main>
    <Footer/>
  </div>
};

export default App;