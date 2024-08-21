import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./section/Hero";
import Analytics from "./section/Analytics";
import Newsletter from "./section/Newsletter";
import Cards from "./section/Cards";
import Footer from "./components/Footer";
import Backup from "./section/Backup";
import Policy from "./section/Policy";
import Security from "./section/Security";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Analytics />
      <Backup />
      <Security />
      <Newsletter />
      <Cards />
      <Policy />
      <Footer />
    </div>
  );
}

export default App;
