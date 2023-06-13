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
          <h3>
            Explore a world of makeup. Discover and shop top-quality cosmetics
          </h3>
          <div className="down-arrow" />
        </section>
      </main>
      <section className="product-category-wrapper">
        <section className="product-post face-product">
          <div className="product-content-wrapper">
            <div className="product-content">
              <h3 className="product-title">Face Makeup</h3>
              <p className="product-intro">
                Create a flawless canvas with our collection of face makeup.
                <br />
                <br />
                From foundations to concealers and blushes, discover the
                essentials for a radiant complexion.
              </p>
              <Link to="face" className="product-link">
                See products
              </Link>
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
              <h3 className="product-title">Eye Makeup</h3>
              <p className="product-intro">
                Accentuate your eyes with our range of captivating eye makeup.
                <br />
                <br />
                Explore stunning eyeshadows, eyeliners, and mascaras to achieve
                mesmerizing looks that leave a lasting impression.
              </p>
              <Link to="eye" className="product-link">
                See products
              </Link>
            </div>
          </div>
        </section>
        <section className="product-post lip-product">
          <div className="product-content-wrapper">
            <div className="product-content">
              <h3 className="product-title">Lip Products</h3>
              <p className="product-intro">
                Express yourself with our vibrant lipstick collection.
                <br />
                <br />
                Discover an array of shades and finishes that effortlessly
                elevate your pout and add a pop of color to any look.
              </p>
              <Link to="lip" className="product-link">
                See products
              </Link>
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
