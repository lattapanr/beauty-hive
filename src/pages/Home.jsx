import EyeImage from "../assets/eyeImg.jpg";
import FaceImage from "../assets/faceImg.jpg";
import HeroImage from "../assets/heroImg.jpg";
import HeroVideo from "../assets/heroVideo.mp4";
import LipImage from "../assets/lipImg.jpg";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main className="landing-page">
        <div className="video-wrapper">
          <video autoPlay controls muted playsInline loop poster={HeroImage}>
            <source src={HeroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="landing-page-overlay" />
        <section className="main-content">
          <h1>
            <span>Hey there,</span> <br />
            Come pick your new fav makeup items!
          </h1>
          <h2>
            Explore a world of makeup. Discover and shop top-quality cosmetics
          </h2>
          <div className="down-arrow" />
        </section>
      </main>
      <section className="product-category-wrapper">
        <h2>Products</h2>
        <section className="product-post face-product">
          <div className="product-content-wrapper">
            <div className="product-content">
              <Link to="face" className="product-link">
                Face Makeup
              </Link>
              <p className="product-intro">
                Create a flawless canvas with our collection of face makeup.
              </p>
            </div>
          </div>
          <img
            className="product-image"
            src={FaceImage}
            alt="foundation stick being applied to a woman"
          />
        </section>
        <section className="product-post eye-product">
          <img
            className="product-image"
            src={EyeImage}
            alt="eye makeup products"
          />
          <div className="product-content-wrapper">
            <div className="product-content">
              <Link to="eye" className="product-link">
                Eye Makeup
              </Link>
              <p className="product-intro">
                Accentuate your eyes with our range of captivating eye makeup.
              </p>
            </div>
          </div>
        </section>
        <section className="product-post lip-product">
          <div className="product-content-wrapper">
            <div className="product-content">
              <Link to="lip" className="product-link">
                Lip Products
              </Link>
              <p className="product-intro">
                Express yourself with our vibrant lipstick collection.
              </p>
            </div>
          </div>
          <img
            className="product-image"
            src={LipImage}
            alt="a woman applying lipstick"
          />
        </section>
      </section>
    </>
  );
};

export default Home;
