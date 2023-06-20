import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import { SlMagnifier, SlMenu } from "react-icons/sl";
import { AiOutlineClose } from "react-icons/ai";
import { brands } from "../data/brands.js";

const Navbar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSidebarToggle = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleSearchBarToggle = () => {
    setIsSearchBarVisible(!isSearchBarVisible);

    if (!isSearchBarVisible) {
      setSearchValue("");
    }
  };

  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        (window.innerWidth > 740 && window.scrollY) ||
        document.documentElement.scrollTop;
      const isScrolling = scrollTop > 50;
      setIsScrolling(isScrolling);
    };

    const handleResize = () => {
      if (window.innerWidth > 740) {
        window.addEventListener("scroll", handleScroll);
      } else {
        window.removeEventListener("scroll", handleScroll);
        setIsScrolling(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize(); // Call handleResize initially to set the appropriate state

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      <nav className={`masthead ${isScrolling ? "scrolling" : ""}`}>
        <div className="masthead-container">
          {/* Hamburger menu */}
          <div className="icon-container" onClick={handleSidebarToggle}>
            {isSidebarVisible ? (
              <AiOutlineClose className="icon" />
            ) : (
              <SlMenu className="icon" />
            )}
          </div>

          {/* Logo */}
          <div className="logo">
            <img
              src={Logo}
              alt="Beauty Hive logo"
              className={`logo-img ${isScrolling ? "scrolling" : ""}`}
            />
          </div>

          {/* Magnifying menu */}
          <div className="icon-container" onClick={handleSearchBarToggle}>
            {isSearchBarVisible ? (
              <AiOutlineClose className="icon" />
            ) : (
              <SlMagnifier className="icon" />
            )}
          </div>
        </div>

        {/* Hidden Sidebar */}
        <div className="side-bars-container">
          {isSidebarVisible ? (
            <ul className={`sidebar ${isSidebarVisible ? "open" : ""}`}>
              <li className="sidebar-item">
                <Link
                  to="/"
                  aria-label="redirect to homepage"
                  className="sidebar-link"
                  onClick={() => setIsSidebarVisible(false)}
                >
                  Home
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  to="face"
                  className="sidebar-link"
                  onClick={() => setIsSidebarVisible(false)}
                >
                  Face Makeup
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  to="eye"
                  className="sidebar-link"
                  onClick={() => setIsSidebarVisible(false)}
                >
                  Eye Makeup
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  to="lip"
                  className="sidebar-link"
                  onClick={() => setIsSidebarVisible(false)}
                >
                  Lip Products
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  to="about"
                  className="sidebar-link"
                  onClick={() => setIsSidebarVisible(false)}
                >
                  About
                </Link>
              </li>
            </ul>
          ) : (
            ""
          )}

          {isSearchBarVisible && (
            <div className="search-bar open">
              <input
                type="text"
                placeholder="Type to search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    // Prevent form submission
                    e.preventDefault();

                    // Redirect to the search page passing the searchValue as a query parameter
                    window.location.href = `/search?query=${searchValue}`;
                  }
                }}
              />

              <div className="search-brands-container">
                <h3>Search by Brand</h3>
                <div className="brands-container">
                  {brands.map((brand) => (
                    <p key={brand}>{brand}</p>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Hidden nav */}
        <div className="scroll-hidden-nav-container">
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
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
