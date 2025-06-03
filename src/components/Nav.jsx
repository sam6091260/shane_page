import logo from "../assets/shhh-logo.png";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <>
      <nav className="container">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <ul>
          <li>
            <Link to="/">index</Link>
          </li>
          <li>
          <Link
              to="/"
              state={{ scrollTarget: "work", from: "gallery" }}
            >
              work
            </Link>
          </li>
          <li>
            <Link to="/gallery">gallery</Link>
          </li>
          <li>
            <Link 
              to="/"
              state={{ scrollTarget: "contect", from: "gallery" }}
              >
                contact
                </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
