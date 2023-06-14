import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
      <h1>CompuStore</h1>
      <nav>
        <ul>
          <li>Procesadores</li>
          <li>Placas Madre</li>
          <li>Placas de video</li>
        </ul>
      </nav>

      <CartWidget/>
      
    </header>
  )
}

export default NavBar