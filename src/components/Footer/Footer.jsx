import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer-banner">
      <div className="footer-main-container">
        <div className="footer-container">
          <div className="footer-about">
            <h5 className="footer-menu-title">About us</h5>
            <p className="footer-paragpaph">
              When using the SKYBOX Services You may transmit, store and or
              share certain data, information, files, etc. (altogether “Service
              Data”). For the avoidance of doubt, You retain full ownership of
              Your Service Data. SKYBOX doea that You or any other uss while
              using the Service. SKYBOX agrees that these Terms do not grant
            </p>
          </div>
          <div className="footer-about">
            <h5 className="footer-menu-title">Featured links</h5>
            <ul>
              <li className="menu-item footer-paragpaph">
                <Link className="footer-link" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="menu-item footer-paragpaph">
                <Link className="footer-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="menu-item footer-paragpaph">
                <Link className="footer-link" to="/">
                  DMCA
                </Link>
              </li>
              <li className="menu-item footer-paragpaph">
                <Link className="footer-link" to="/">
                  Refund Policy
                </Link>
              </li>
              <li className="menu-item footer-paragpaph">
                <Link className="footer-link" to="/">
                  Privacy Policy
                </Link>
              </li>
              <li className="menu-item footer-paragpaph">
                <Link className="footer-link" to="/">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-about">
            <h5 className="footer-menu-title">Contact us</h5>
            <span className="footer-paragpaph">
              Our office:
              <br />
              Digitalgoals LTD
              <br />
              Lapathou, 6, Strovolos 2027,
              <br />
              Lefkosia, Cyprus
              <br />
              Phone: +37 06 225 29 36
              <br />
              Email: mail@example.com
            </span>
          </div>
        </div>
        <hr
          style={{
            color: '#FFFFFF',
            backgroundColor: '#FFFFFF',
            height: 1,
            margin: '65px 0 90px',
            width: '1600px',
          }}
        />
        <div className="footer-under">
          <span> Copyright © 2020 - 2025 - 愛 luv - Online File Storage</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
