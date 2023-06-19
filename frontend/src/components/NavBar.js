import Link from "next/link";
import './custom-styles/NavBar.css'

function Navbar() {
    return (
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link exact = "true" href="/" className="navbar-link" activeclassname="navbar-link-active">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link href="/favourites" className="navbar-link" activeclassname="navbar-link-active">
              Favourites
            </Link>
          </li>
          <li className="navbar-item">
            <Link href="/joke-of-the-day" className="navbar-link" activeclassname="navbar-link-active">
              Joke of the Day
            </Link>
          </li>
          <li className="navbar-item">
            <Link href="/submit-joke" className="navbar-link" activeclassname="navbar-link-active">
              Submit Joke
            </Link>
          </li>
          <li className="navbar-item">
            <Link href="/share-joke" className="navbar-link" activeclassname="navbar-link-active">
              Share Joke
            </Link>
          </li>
          <li className="navbar-item">
            <Link href="/settings" className="navbar-link" activeclassname="navbar-link-active">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;