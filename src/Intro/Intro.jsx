import Button from "../Button/Button";


export default function Intro () {
    return (
        <div className="intro">
            <img src="src/assets/intro/intro-img.png" alt="" />
            <div className="intro_info">
                <h2 className="intro_header">Реплики картин от <b>Ink. House</b></h2>
                <p className="intro_text">
                    Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.
                </p>
                <Button>Продукция</Button>
            </div>
        </div>
    )
}