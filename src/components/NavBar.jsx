import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className="navbar">
            <h1>Navbar</h1>
            <div id="navbar">
          <Link to='/'>Home</Link>
          <Link to='/red'>Red</Link>
          <Link to='/blue'>Blue</Link>
          <Link to='/tony'>Tony</Link>
        </div>
        </div>
    )
}