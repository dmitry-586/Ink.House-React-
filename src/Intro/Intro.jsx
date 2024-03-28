import Button from "../Button/Button";

import { Link, animateScroll as scroll } from "react-scroll";

export default function Intro () {
    return (
        <div className="intro">
            <img src="src/assets/intro/intro-img.png" alt="" />
            <div className="intro_info">
                <h2 className="intro_header">Реплики картин от <b>Ink. House</b></h2>
                <p className="intro_text">
                    Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.
                </p>
                <Link to="Reproductions" smooth={true} offset={-75}><Button>Продукция</Button></Link>
            </div>
        </div>
    )
}