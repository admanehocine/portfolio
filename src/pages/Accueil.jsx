import React from "react";
import About from "./About";
import Technologie from "./Technologie";
import Contact from "./Contact";
import Realisations from "./Realisations";
import Services from "./Services";
import Footer from "../components/Footer";

const Accueil = () => {
  return (
    <div className="mt-5">
      <About />
      <Technologie />
      <Services />
      <Realisations />
      <Contact />
      <Footer />
    </div>
  );
};

export default Accueil;
