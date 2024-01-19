import React from "react";
import Navbar from "./components/Navbar";
import CardNews from "./components/CardNews";
import leanNews from "./components/images/hero.jpg";
import Boletim from "./components/images/LogoBoletim.png";
function App() {
  return (
    <>
      <Navbar />
      <div className="deep">
      <CardNews
        logoBoletim={Boletim}
        headline="Projeto lean decola agora com um texto mais longo para ver o que a acontece"
        text="projeto manda milhares the base mas se vocçe for parar para pensar será que ir the base é the fato ruim? por qyue no lol a gente vai the base para recuperar as forças (quando se trata de uma ida de base vonlutária) tá me entendendo?"
        logo={leanNews}
        logodes="Lean"
      />
      </div>
    </>
  );
}

export default App;
