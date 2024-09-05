import { Link } from 'react-router-dom'

import './Header.css'

const Header = () => {
  return (
    <header>
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
                <Link className="navbar-link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="navbar-link" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="navbar-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header-auto">
            <Link to="/login">
              <button className="header-login">login</button>
            </Link>
            <Link to="/registration">
              <button className="header-reg">sign up</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
