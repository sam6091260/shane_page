import logo from "../assets/shhh-logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Nav(props) {

  const location = useLocation();
	const navigate = useNavigate();

	const fromGallery = location.state?.from === 'gallery';
  const handleImageClick = (productKey) => {
    
    if(fromGallery) {
      navigate(`/`);

    } else {

    }

  };
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
