import Button from "../../Button/Button";


export default function Card (props) {
    return (
        <div className="Card">
            <img src={props.img} alt="" />
            <p className="Card_author">{props.author}</p>
            <h3 className="Card_header">{props.header}</h3>
            <p className="Card_info">{props.info}</p>
            <div className="price">{props.price}</div>
            <Button>В корзину</Button>
        </div>
    )
}