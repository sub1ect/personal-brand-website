import Header from "./header.js";
import Hero from "./hero.js";
import About from "./about.js";
import Pricing from "./pricing.js";
import Breakline from "./breakline.js";
import Contact from "./contact.js";
import Footer from "./footer.js";


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
