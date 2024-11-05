import Hero from "./components/Hero";
import About from "./components/About";
import SoftSkills from "./components/SoftSkills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-800 text-zinc-100">
      <Hero />
      <About />
      <SoftSkills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
