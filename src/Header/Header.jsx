export default function Header () {
    return (
      <div className='header'>
        <div className="header_wrapper">
        <img src="src/assets/Header/logo.svg" alt="" className="header_media"/>
        </div>
        <ul className='header_menu'>
          <li>Репродукции</li>
          <li>Новинки</li>
          <li>О нас</li>
          <img src="src/assets/Header/cart.png" alt="" className="header_cart"/>
        </ul>
      </div>
    )
  }