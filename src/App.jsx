import { Navbar } from '@/layout/Navbar';
import { Hero } from '@/Sections/Hero';
import { About } from '@/Sections/About';
import { Experience } from '@/Sections/Experience';
import {Hobbies} from '@/Sections/Hobbies';
import { Contact } from '@/Sections/Contact';


function App() {
  return <div className="min-h-screen overflow-hidden">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Experience />
      <Hobbies />
      <Contact />
    </main>
  </div>
};

export default App;