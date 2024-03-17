export default function Header () {
    return (
      <div className='header'>
        <img src="src/assets/Header/logo.svg" alt="" />
        <ul className='header_menu'>
          <li>Репродукции</li>
          <li>Новинки</li>
          <li>О нас</li>
          <img src="src/assets/Header/cart.png" alt="" />
        </ul>
      </div>
    )
  }