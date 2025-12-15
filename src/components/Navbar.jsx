import { Link } from 'react-router-dom'
import { navLinks } from '../data/content'
import logoImg from '../assets/Logo-Pionner-Lake-Mary.png'

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="logo" aria-label="Go to home">
        <img src={logoImg} alt="Pioneer Mortgage Funding Lake Mary" className="logo-mark" />
      </Link>
      <div className="menu">
        {navLinks.map((link) => {
          if (!link.children) {
            return link.external ? (
              <a key={link.label} href={link.to}>
                {link.label}
              </a>
            ) : (
              <Link key={link.label} to={link.to}>
                {link.label}
              </Link>
            )
          }

          return (
            <div key={link.label} className="nav-item">
              <Link to={link.to}>{link.label} +</Link>
              <div className="dropdown">
                {link.children.map((child) => {
                  if (child.children) {
                    return (
                      <div key={child.label} className="nav-item">
                        <Link to={child.to}>{child.label} +</Link>
                        <div className="dropdown">
                          {child.children.map((sub) => (
                            <Link key={sub.label} to={sub.to}>
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )
                  }

                  return child.external ? (
                    <a key={child.label} href={child.to}>
                      {child.label}
                    </a>
                  ) : (
                    <Link key={child.label} to={child.to}>
                      {child.label}
                    </Link>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </nav>
  )
}

export default Navbar
