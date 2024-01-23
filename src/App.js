import React from "react";
import './App.css'
import Navbar from "./components/Navbar";
import CardNews from "./components/CardNews/index.js";
import logoBoletim from "./components/images/LogoBoletim.png";
import newsone from "./components/images/hero.jpg";
import Section from "./components/Section";
import SectionAcompanhamento from "./components/SectionAcompanhamento"

function App() {

  const itensAndThais = ["teste", "uhum", "desq"]
  const itensBckThais = ["1213", "3213", "9999"]

  return (
    <>
      <Navbar />
      <CardNews
        logoBoletim={logoBoletim}
        headline="Uma noticia mirabolante"
        text="uma noticia realmente fantastica"
        logo={newsone}
      />
      <Section sector="Projetos" section="Acompanhamento" />
      <div className="teste">
        <Section sector="Projetos" section="Resultados" />
        <SectionAcompanhamento
        itens={itensAndThais}
        itensbck={itensBckThais}
        
        />
      </div>
    </>
  );
}

export default App;
