import { Link } from "react-router-dom";
import "../App.css";

const Footer = () => {
  return (
    <footer>
      <section className="footer-container">
        <section className="social-media-container">
          <Link
            to="/"
            className="sidebar-link"
            aria-label="redirect to homepage"
          >
            <i className="fa-brands fa-facebook" />
          </Link>

          <Link
            to="/"
            className="sidebar-link"
            aria-label="redirect to homepage"
          >
            <i className="fa-brands fa-twitter" />
          </Link>

          <Link
            to="/"
            className="sidebar-link"
            aria-label="redirect to homepage"
          >
            <i className="fa-brands fa-instagram" />
          </Link>
        </section>
        <section className="subscription-form-container">
          <p className="subscribe-text">Stay updated with our new products!</p>
          <div className="subscription-items">
            <input
              type="email"
              name="EMAIL"
              placeholder="Join our newsletter"
              className="email-box"
            />
            <input type="submit" defaultValue="Send" className="submit" />
          </div>
        </section>
        <section className="footer-menu">
          <div className="menu-item">
            <Link to="/" className="sidebar-link">
              Home
            </Link>
          </div>
          <div className="menu-item">
            <Link to="about" className="sidebar-link">
              About
            </Link>
          </div>
          <div className="menu-item">
            <a href="#products" className="sidebar-link">
              Products
            </a>
          </div>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
