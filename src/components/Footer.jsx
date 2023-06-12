import "../App.css";

const Footer = () => {
  return (
    <footer>
      <section className="navbar-wrapper">
        <section className="social-media-container">
          <a href="#">
            <i className="fa-brands fa-facebook" />
          </a>
          <a href="#">
            <i className="fa-brands fa-twitter" />
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram" />
          </a>
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
            <a href="#">
              <span>Home</span>
            </a>
          </div>
          <div className="menu-item">
            <a href="#">
              <span>About</span>
            </a>
          </div>
          <div className="menu-iten">
            <a href="#">
              <span>Blog</span>
            </a>
          </div>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
