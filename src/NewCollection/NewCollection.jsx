import Button from "../Button/Button";

export default function NewCollection() {
    return(
        <div className="NewCollection">
            <div className="NewCollection_header">
                <img src="src/assets/NewCollection/Star.png" alt="" />
                Новая коллекция французских авторов
            </div>
            <div className="NewCollection_info">
            Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям, которые, в свою очередь, должны быть заблокированы в рамках своих собственных рациональных ограничений.<br /><br />
            Принимая во внимание показатели успешности, граница обучения кадров предопределяет высокую востребованность направлений прогрессивного развития.
            </div>
            <div className="NewCollection_btn">
                <Button>Ознакомиться</Button>
            </div>
        </div>
    )
}