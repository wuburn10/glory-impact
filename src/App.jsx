import { useSmoothScroll } from "./lib/useSmoothScroll";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Manifesto from "./components/Manifesto";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Products from "./components/Products";
import Reach from "./components/Reach";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  useSmoothScroll();

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Clients />
        <Manifesto />
        <Services />
        <Stats />
        <Products />
        <Reach />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
