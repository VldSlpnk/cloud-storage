import './Header.css'

const Header = () => {
  return (
    <header className="header-background">
      <div className="container">
        <div className="header-sec">
          <div className="header-logo">
            <a href="/" className="logo">
              skybox
            </a>
          </div>
          <nav className="navbar-menu">
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
          <div className="header-auto">
            <button className="header-login">login</button>
            <button className="header-reg">sign up</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
