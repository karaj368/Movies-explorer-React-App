import { Link } from "react-router-dom"

function NavBar() {
  return (
    <div>
       <nav className="navbar">
        <Link className="logo" to="/">
          <h2>🎬 Movie Explorer</h2>
        </Link>
        <Link to="/">Home</Link>
      </nav>
    </div>
  )
}

export default NavBar
