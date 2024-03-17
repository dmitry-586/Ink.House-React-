export default function FooterMenu (props) {
    return (
        <ul className="FooterMenu">
            <h3>{props.h3}</h3>
            <li>{props.l1}</li>
            <li>{props.l2}</li>
            <li>{props.l3}</li>
        </ul>
    )
}