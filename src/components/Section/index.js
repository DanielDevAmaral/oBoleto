import "./Section.css";
import Cardtemplate from "../Card";
const Section = (props) => {
  return (
    <div className="general">
      <div className="headline">
        <h1>{props.sector}/</h1>
        <h3>{props.section}</h3>
      </div>
      <div className="card-container">
        <Cardtemplate
          img="https://www.ceara.gov.br/wp-content/uploads/2020/03/ASCOM-SESA_6930_T.jpg"
          title="Leitos"
          description="um teste razoavel para um resultado favoravel"
          button="arraste-se para cima"
        />
        <Cardtemplate
          img="https://www.iespe.com.br/wp-content/uploads/2016/04/1.png"
          title="UTI"
          description="um teste razoavel para um resultado favoravel"
          button="arraste-se para cima"
        />
        <Cardtemplate
          img="https://s2-g1.glbimg.com/e9kbblFqA1dPXdXfPvqNJTHN59Q=/0x0:1700x938/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/m/U/BB4KeAROmJ0HOeGYlOZg/hospitalprimavera2.jpg"
          title="Qualidade"
          description="um teste razoavel para um resultado favoravel"
          button="arraste-se para cima"
        />
      </div>
    </div>
  );
};

export default Section;
