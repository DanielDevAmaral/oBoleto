import "./SectionAcompanhamento.css";

const SectionAcompanhamento = (props) => {


  return (
    <div className="general">
      <div className="headline">
        <h1>{props.sector}/</h1>
        <h3>{props.section}</h3>
      </div>
      <div className="grid-container">
        <div className="andamento">
            <h1>Andamento</h1>
            {props.itens.map(item =>{
                return <li>{item}</li>
            })}
        </div>
        <div className="backlog">
            <h1>Backlog</h1>
            {props.itensbck.map(item =>{
                return <li>{item}</li>
            })}
        </div>
        <div className="imagem">
        <img src={props.logo} alt={props.logodes}/>
        
        </div>
      </div>
    </div>
  );
};

export default SectionAcompanhamento;
