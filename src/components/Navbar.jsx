import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header>
      <section className="masthead">
        <div className="masthead-container">
          <i className="fa-solid fa-bars" />
          <div className="logo">
            <img src={Logo} alt="Beauty Hive logo" className="logo-img" />
          </div>
          <i className="fa-solid fa-magnifying-glass" />
          <div className="search-bar" data-visible="false">
            <input type="text" placeholder="Type to search..." />
          </div>
          <ul className="sidebar" data-visible="false">
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                Home
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                Face Makeup
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                Eye Makeup
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                Lip Products
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                About
              </a>
            </li>
          </ul>
        </div>
        <ul className="scroll-hidden-nav">
          <li className="hidden-nav-item">
            <a href="#" className="hidden-nav-link">
              Home
            </a>
          </li>
          <li className="hidden-nav-item">
            <a href="#" className="hidden-nav-link">
              Face Makeup
            </a>
          </li>
          <li className="hidden-nav-item">
            <a href="#" className="hidden-nav-link">
              Eye Makeup
            </a>
          </li>
          <li className="hidden-nav-item">
            <a href="#" className="hidden-nav-link">
              Lip Products
            </a>
          </li>
          <li className="hidden-nav-item">
            <a href="#" className="hidden-nav-link">
              About
            </a>
          </li>
        </ul>
      </section>
    </header>
  );
};

export default Navbar;
