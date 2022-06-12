
function Card(props) {
    return(
        <div className="container">
            <p>{props.title}</p>
            {props.children}
        </div>
    )
}

export default Card;