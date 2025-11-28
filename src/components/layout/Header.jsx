import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Button from '../ui/Button'
import LogoWordmark from './LogoWordmark'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Converter', to: '/app' },
  { label: 'Saved', to: '/saved' },
]

export default function Header() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header className="header-shell">
      <div className="container header-inner">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <LogoWordmark size="lg" />
        </Link>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div className="nav-desktop">
            <div className="nav-links">
              {navItems.map((item) => {
                const isActive = location.pathname === item.to
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    style={{
                      fontWeight: 600,
                      fontSize: 14,
                      color: isActive ? 'var(--color-terracotta)' : 'var(--color-text)',
                      padding: '8px 10px',
                      borderRadius: 8,
                      transition: 'background 150ms ease',
                    }}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
            <Button as={Link} to="/app" variant="primary" size="sm">
              Open Converter
            </Button>
          </div>
          <button className="nav-mobile-toggle" type="button" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
            <span className="hamburger-lines" />
          </button>
        </nav>
      </div>
      <div className={`container nav-mobile ${menuOpen ? 'open' : ''}`}>
        <div className="nav-links" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          {navItems.map((item) => {
            const isActive = location.pathname === item.to
            return (
              <Link
                key={item.to}
                to={item.to}
                style={{
                  fontWeight: 700,
                  fontSize: 16,
                  color: isActive ? 'var(--color-terracotta)' : 'var(--color-text)',
                  padding: '10px 0',
                }}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>
    </header>
  )
}
