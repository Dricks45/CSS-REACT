import ProTypes from "prop-types";

function Card(props) {
        
        return (
            <figure>{props.data.name}
                <figcaption>{props.data.about}</figcaption>
                <img src={props.data.img} alt={props.data.name} />
            </figure>
            
    )
}

Card.propTypes = {
    data: ProTypes.shape({
        name: ProTypes.string.isRequired,
        img: ProTypes.string.isRequired,
        about: ProTypes.string.isRequired,
    }).isRequired,
}

export default Card;