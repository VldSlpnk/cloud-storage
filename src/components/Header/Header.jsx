import { Link } from 'react-router-dom'

import { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../firebase'

import './Header.css'

const Header = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })

    return () => unsubscribe()
  }, [])

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null)
      })
      .catch((error) => {
        console.error('Sign out error', error)
      })
  }
  const getUserName = (email) => {
    return email.split('@')[0]
  }
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
            {user ? (
              <div className="header-user-info">
                <span className="header-user-email">
                  <Link to="/account">{getUserName(user.email)}</Link>
                </span>
                <button className="header-logout" onClick={handleSignOut}>
                  Sign Out
                </button>
              </div>
            ) : (
              <div>
                <Link to="/login">
                  <button className="header-login">Login</button>
                </Link>
                <Link to="/registration">
                  <button className="header-reg">Sign Up</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
