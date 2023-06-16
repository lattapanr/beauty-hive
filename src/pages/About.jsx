import { Link } from "react-router-dom";
import "../App.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <main className="about-page-container">
      <div className="about-page-content-container">
        <div className="about-title">
          <h1>
            Let's Get to <br /> Know This Website!
          </h1>
        </div>

        <section className="about-content-container">
          <section className="about-content">
            <div className="about-content-title">
              <h2>What It Is:</h2>
            </div>
            <div className="about-content-text">
              <p>
                Welcome to this proudly designed, responsive website! This is a
                beauty lover's dream come true! Here, you'll discover an
                incredible array of makeup products sourced from the{" "}
                <Link to="http://makeup-api.herokuapp.com/">Makeup API</Link>.
                This site boasts a sleek and modern design, making it a delight
                to explore makeup items for your face, eye, and lips.
              </p>
            </div>
          </section>

          <section className="about-content">
            <div className="about-content-title">
              <h2>What It Offers:</h2>
            </div>
            <div className="about-content-text">
              <p>
                Every product showcased here acts as a gateway to its brand's
                page, treating you to detailed information, helpful customer
                reviews, and the convenience of making purchases. While the
                newsletter and social media sections may be static, they bring
                an authentic blog-like feel to the experience, making you feel
                right at home.
              </p>
            </div>
          </section>

          <section className="about-content">
            <div className="about-content-title">
              <h2>Why This Site Exists:</h2>
            </div>
            <div className="about-content-text">
              <p>
                Not only does this project offer a chance for me to sharpen my
                React skills, but it also allows me to dive into React Router
                implementation and API integration. I'm thrilled to have you
                join me on this exciting journey, where technology and beauty
                harmoniously blend together!
              </p>
            </div>
          </section>

          <section className="about-content">
            <div className="about-content-title">
              <h3>Disclaimer:</h3>
            </div>
            <div className="about-content-text">
              <p>
                When you click on a product to make a purchase, you might notice
                that some of the product links have been taken down by the
                owner. It could be because they no longer sell those products.
              </p>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
};

export default About;
