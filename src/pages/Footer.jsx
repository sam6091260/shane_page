import logo from "../assets/shhh-logo.png";
import ig from "../assets/icons-ig.png";
import fb from "../assets/icons-facebook.png";
import gh from "../assets/icons-github.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" className="logo" />
            </Link>
          </div>
          <div className="tag">
            <Link target="_blank" to="https://www.instagram.com/__ssshane/">
              <img src={ig} alt="ig" />
            </Link>
            <Link target="_blank" to="https://www.facebook.com/fan.shian/">
              <img src={fb} alt="fb" />
            </Link>
            <Link target="_blank" to="https://github.com/sam6091260">
              <img src={gh} alt="gh" />
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Copyright © shane design Co. Ltd. All rights reserved.
            <br />
            Powered by Shane Lin
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
