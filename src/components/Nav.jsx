import logo from "../assets/shhh-logo.png";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Nav({ activeSection }) {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    { name: "index", to: "/", state: null },
    { name: "work", to: "/", state: { scrollTarget: "work", from: "gallery" } },
    { name: "gallery", to: "/gallery", state: null },
    { name: "contact", to: "/", state: { scrollTarget: "contect", from: "gallery" } }
  ];

  useEffect(() => {
    // 根據當前路徑和滾動位置設置活躍項
    if (location.pathname === "/gallery") {
      setActiveIndex(2);
    } else if (location.pathname === "/") {
      // 在首頁時，根據 activeSection 更新
      const sectionIndex = navItems.findIndex(item => item.name === activeSection);
      if (sectionIndex !== -1) {
        setActiveIndex(sectionIndex);
      }
    } else if (location.state?.scrollTarget === "work") {
      setActiveIndex(1);
    } else if (location.state?.scrollTarget === "contect") {
      setActiveIndex(3);
    } else {
      setActiveIndex(0);
    }
  }, [location, activeSection]);

  const handleNavClick = (index, item) => {
    setActiveIndex(index);
    
    // 如果點擊的是 index，滾動到頂部
    if (item.name === "index") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="container nav-container">
        <div className="toggle-switch-nav">
        <Link to="/" className="logo-link">
          <img src={logo} alt="logo" className="logo" />
        </Link>
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  state={item.state}
                  className={`toggle-switch-item ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => handleNavClick(index, item)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
