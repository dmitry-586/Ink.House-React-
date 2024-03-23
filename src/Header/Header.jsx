import { useState } from "react"

export default function Header () {
    const [nav, setNav] = useState(false)

    return (
      <div className='header'>
        <div className="header_wrapper">
        <img src="src/assets/Header/logo.svg" alt="" className="header_media"/>
        </div>
        <ul className={nav ? ['header_menu', 'active'].join(' ') : ['header_menu']}>
          <li>Репродукции</li>
          <li>Новинки</li>
          <li>О нас</li>
          <img src="src/assets/Header/cart.png" alt="" className="header_cart"/>
        </ul>
        <div onClick={() => setNav(!nav)} className={nav ? ["burger", "open"].join(' ') : ["burger"]}>
          <span></span>
        </div>
      </div>
    )
  }