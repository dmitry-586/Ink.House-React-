import FooterMenu from "./FooterMenu"
import { FooterArray } from './FooterArray'

export default function Footer () {
    return (
        <div className="Footer">
            <div className="Footer_logo">
                <img src="src/assets/Header/logo.svg" alt="" />
                <div className="Footer_number">
                    <p>+7 (999) 543-54-54</p>
                    <p className="Footer_number_add">Мастерская</p>
                </div>
            </div>
            <div className="Footer_wrapper">
                <div className="Footer_menu_wrapper">
                    <FooterMenu {...FooterArray[0]}/>
                    <FooterMenu {...FooterArray[1]}/>
                    <FooterMenu {...FooterArray[2]}/>
                </div>
                <div className="Footer_icons">
                    <div className="Footer_icons_images">
                    <img src="src/assets/Footer/fb.svg" alt="" />
                    <img src="src/assets/Footer/inst.svg" alt="" />
                    <img src="src/assets/Footer/yt.svg" alt="" />
                    </div>
                    <div className="Footer_p">
                    <p>Ink. House ®</p>
                    <p>All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

