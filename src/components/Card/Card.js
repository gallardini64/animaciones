import './Card.css'

function Card(props) {
    return(
        <div className="container">
            <h1>{props.header}</h1>
            <p>{props.title}</p>
            {props.children}
        </div>
    )
}

export default Card;