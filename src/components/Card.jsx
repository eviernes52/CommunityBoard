export default function Card(props) {
    return (
        <div className="Card" style={{ width: "300px", height: "450px" }}>
            <img
            src={props.image} alt={props.name}
            style={{ width: "300px", height: "300px" }}/>            
            <h3>{props.name}</h3>
            <h4>{props.type}</h4>
            <a href={props.viewmenu} target="_blank" rel="noopener noreferrer"><button>View Game</button></a>        </div>
    );
}