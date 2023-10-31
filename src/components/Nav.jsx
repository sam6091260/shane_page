import logo from "../assets/shhh-logo.png";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <>
      {/* 導覽列 */}
      <nav className="container">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <ul>
          <li>
            <Link to="/">index</Link>
          </li>
          <li>
            <Link to="/">biography</Link>
          </li>
          <li>
            <Link onClick={props.scrollToWork}>portfolio</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
