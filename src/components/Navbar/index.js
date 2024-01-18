import Logo from '../images/MARCAREDE.png';
import "./Navbar.css";
import DropdownBt from '../DropdownBt';

const Navbar = () => {
    const itensNig = ["Painéis", "NIGflix"]
    const itensProj = ["Resultados", "Acompanhamento"]
    const itensAut = ["Cadastre"]
  return (
    <nav className="navbar">
      <div className="nav-imageContainer">
        <img src={Logo} alt="Logo Rede Primavera" />
      </div>
      <div className="nav-linkContainer">
        <DropdownBt itens={itensNig} namebt="NIG" />
        <DropdownBt itens={itensProj} namebt="Projetos" />
        <DropdownBt itens={itensAut} namebt="Automações" />
      </div>
    </nav>
  );
}

export default Navbar;