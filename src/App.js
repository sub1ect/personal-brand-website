import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import About from "./components/About.js";
import Pricing from "./components/Pricing.js";
import Breakline from "./components/Breakline.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Breakline />
        <Pricing />
        <Breakline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
