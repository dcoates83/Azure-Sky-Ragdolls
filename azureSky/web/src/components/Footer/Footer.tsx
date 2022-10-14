import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import { Link, routes } from '@redwoodjs/router'
const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 social-network social-circle">
          <li className="nav-item">
            <a
              rel="noopener"
              href="https://www.facebook.com/Azure-Sky-Ragdolls-2203345016408284/"
              target="_blank"
              className="nav-link icoFacebook"
              title="Facebook"
            >
              {/* <i className="fa fa-facebook"></i> */}
              <FacebookOutlinedIcon sx={{ color: '#0A82ED' }} />
            </a>
          </li>
        </ul>
      </div>
      <div className="links">
        <nav className="footer-links">
          <ul className="footer-items">
            <li>
              {' '}
              <Link to="mailto:devonbcoates@gmail.com" target="_blank">
                Web Design
              </Link>
            </li>
            <li>
              <Link to={routes.Purchasing()}>Purchasing</Link>
            </li>
            <li>
              <a href="/Purchasing#faq">FAQ</a>
            </li>
            <li>
              <a href="mailto:AzureSkyRagdolls@gmail.com" target="_blank">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="copyright">
        Azure Sky Ragdolls &copy;{' '}
        <span id="date">{new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}

export default Footer
