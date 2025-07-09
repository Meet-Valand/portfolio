import Nav from "./nav";
import Hero from "./hero";
import Projects from "./projects";
import About from "./about";
import Contact from "./contact";

export default function App() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Nav />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
