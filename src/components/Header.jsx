import './Header.css'

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-logo"></div>
        <nav className="menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
