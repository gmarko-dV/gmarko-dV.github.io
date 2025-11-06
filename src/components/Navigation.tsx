import { Link, useLocation } from 'react-router-dom'

function Navigation() {
  const location = useLocation()

  return (
    <nav className="nav">
      <div className="nav-container">
        <Link className="nav-brand" to="/">
          🎯 Trivia Challenge
        </Link>
        <ul className="nav-links">
          <li>
            <Link 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              to="/"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link 
              className={`nav-link ${location.pathname === '/entities' ? 'active' : ''}`}
              to="/entities"
            >
              Preguntas
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation

