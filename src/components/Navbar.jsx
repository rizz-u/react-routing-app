import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
  ]

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Logo */}
        <Link to="/" className="logo">
          <div className="logo-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L18 7V13L10 18L2 13V7L10 2Z" fill="url(#logoGrad)" />
              <defs>
                <linearGradient id="logoGrad" x1="2" y1="2" x2="18" y2="18">
                  <stop stopColor="#7c6bff" />
                  <stop offset="1" stopColor="#ff6b9d" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="logo-text">ReactRoute</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="nav-links">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`nav-link ${location.pathname === path ? 'active' : ''}`}
            >
              {label}
              {location.pathname === path && <span className="active-dot" />}
            </Link>
          ))}
          <a
            href="https://reactrouter.com/en/main"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link external"
          >
            Docs
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{marginLeft:'4px'}}>
              <path d="M2 2h8m0 0v8m0-8L2 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={`mobile-link ${location.pathname === path ? 'active' : ''}`}
          >
            {label}
          </Link>
        ))}
        <a
          href="https://reactrouter.com/en/main"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-link"
        >
          Docs ↗
        </a>
      </div>
    </header>
  )
}

export default Navbar
