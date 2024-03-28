import { useState } from "react"
import { Link, animateScroll as scroll } from "react-scroll";

export default function Header () {
    const [nav, setNav] = useState(false);

    
    return (
      <div className='header'>
        <div className="header_wrapper">
        <img src="src/assets/Header/logo.svg" alt="" className="header_media"/>
        </div>
        <ul className={nav ? ['header_menu', 'active'].join(' ') : ['header_menu']}>
          <Link to="Reproductions" smooth={true} offset={-75}>Репродукции</Link>
          <Link to="NewCollection"smooth={true} offset={-45}>Новинки</Link>
          <Link to="AboutTeam"smooth={true} offset={-45}>О нас</Link>
          <img src="src/assets/Header/cart.png" alt="" className="header_cart"/>
        </ul>
        <div onClick={() => setNav(!nav)} className={nav ? ["burger", "open"].join(' ') : ["burger"]}>
          <span></span>
        </div>
      </div>
    )
  }

