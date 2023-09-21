export default function Card(props) {
    return (
        <div className="Card" style={{ width: "300px", height: "450px" }}>
            <img
            src={props.image} alt={props.name}
            style={{ width: "300px", height: "300px" }}/>            
            <h1>{props.name}</h1>
            <h2>{props.type}</h2>
            <a href={props.viewmenu} target="_blank" rel="noopener noreferrer"><button>View Menu</button></a>        </div>
    );
}