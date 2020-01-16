// LOCAL IMPORTS
import './Header.scss'

const Header = () => {
  return (
    <main id="header">
      <div className="header-col-1">
        <img id="header-img" src="/static/pictekLogo.svg" alt="logo" />
      </div>
      <div className="header-col-2">
        <nav id="nav-bar">
          <ul>
            <li>Features</li>
            <li>Usage</li>
            <li>Pricing</li>
          </ul>
        </nav>
      </div>
    </main>
  )
}

export default Header
