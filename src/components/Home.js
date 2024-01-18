import React from 'react';
import Navbar from "./Navbar";
import Projetos from './Projetos';
import Logo from './images/hero-one.jpg';
import "./Home.css";

export const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="content-container">
        <div className="headline">
          <h1>oBoletim///</h1>
        </div>
        <div className="hero-container">
          <div className="text-container">
            <h3>Projeto Ideia Premiada oferece 500R$ para melhor Ideia</h3>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui"</p>
          </div>
          <div className="buttom-join">
            <a href="google.com">Participar</a>
          </div>
          <div className="image-container">
            <img src={Logo} alt="Descrição da Imagem" />
          </div>
        </div>
      </div>
      <Projetos />
    </div>
  );
};

export default Home;