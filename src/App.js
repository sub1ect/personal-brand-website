import Header from "./components/header.js";
import Hero from "./components/hero.js";
import About from "./components/about.js";
import Pricing from "./components/pricing.js";
import Breakline from "./components/breakline.js";
import Contact from "./components/contact.js";
import Footer from "./components/footer.js";

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
