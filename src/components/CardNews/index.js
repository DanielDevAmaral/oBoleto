import './CardNews.css'
const CardNews = (props) => {
  return (
    <>
      <div className="content-container">
        <img className="logoBoletim" src={props.logoBoletim} alt="oBoletim/"/>
        <div className="hero-container">
          <div className="text-container">
            <h3>{props.headline}</h3>
            <p>
                {props.text}
            </p>
          </div>
          <div className="image-container">
            <img src={props.logo} alt={props.logodes} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardNews;
