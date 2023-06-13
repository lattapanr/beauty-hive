import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import { SlMagnifier, SlMenu } from "react-icons/sl";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [isSearchBarVisible, setSearchBarVisible] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleSearchBarToggle = () => {
    setSearchBarVisible(!isSearchBarVisible);
  };

  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const isScrolling = scrollTop > 50;
    setIsScrolling(isScrolling);
  };

  return (
    <header>
      <nav className={`masthead ${isScrolling ? "scrolling" : ""}`}>
        <div className="masthead-container">
          {/* Hamburger menu */}
          <div className="icon" onClick={handleSidebarToggle}>
            {isSidebarVisible ? (
              <AiOutlineClose size={28} />
            ) : (
              <SlMenu size={28} />
            )}
          </div>

          {/* Sidebar nav */}
          {isSidebarVisible ? (
            <ul className={`sidebar ${isSidebarVisible ? "open" : ""}`}>
              <li className="sidebar-item">
                <Link to="/" className="sidebar-link">
                  Home
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="face" className="sidebar-link">
                  Face Makeup
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="eye" className="sidebar-link">
                  Eye Makeup
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="lip" className="sidebar-link">
                  Lip Products
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="about" className="sidebar-link">
                  About
                </Link>
              </li>
            </ul>
          ) : (
            ""
          )}

          {/* Logo */}
          <div className="logo">
            <img
              src={Logo}
              alt="Beauty Hive logo"
              className={`logo-img ${isScrolling ? "scrolling" : ""}`}
            />
          </div>

          {/* Sidebar search */}
          <div className="icon" onClick={handleSearchBarToggle}>
            {isSearchBarVisible ? (
              <AiOutlineClose size={28} />
            ) : (
              <SlMagnifier size={28} />
            )}
          </div>
        </div>

        {isSearchBarVisible && (
          <div className="search-bar open">
            <input type="text" placeholder="Type to search..." />
          </div>
        )}

        {/* Hidden nav */}
        <ul className={`scroll-hidden-nav ${isScrolling ? "scrolling" : ""}`}>
          <li className="hidden-nav-item">
            <Link to="/" className="sidebar-link">
              Home
            </Link>
          </li>
          <li className="hidden-nav-item">
            <Link to="face" className="sidebar-link">
              Face Makeup
            </Link>
          </li>
          <li className="hidden-nav-item">
            <Link to="eye" className="sidebar-link">
              Eye Makeup
            </Link>
          </li>
          <li className="hidden-nav-item">
            <Link to="lip" className="sidebar-link">
              Lip Products
            </Link>
          </li>
          <li className="hidden-nav-item">
            <Link to="about" className="sidebar-link">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
