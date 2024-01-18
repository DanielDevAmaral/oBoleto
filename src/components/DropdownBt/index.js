import './DropdownBt.css'
const DropdownBt = (props) => {
    const { itens } = props;

    return(
        <div className="dropdown">
        <button className="dropbtn">{props.namebt}</button>
        <div className="dropdown-content">
        {itens.map((item, index) => (
            <a href="teste" key={index}>{item}</a>
        ))}
        </div>
      </div>
    )
}

export default DropdownBt