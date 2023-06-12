import EyeImage from "../assets/eyeImg.jpg";
import FaceImage from "../assets/faceImg.jpg";
import HeroImage from "../assets/heroImg.jpg";
import HeroVideo from "../assets/heroVideo.mp4";
import LipImage from "../assets/lipImg.jpg";

const Home = () => {
  return (
    <>
      <main className="landing-page">
        <div className="video-wrap">
          <video
            type="video/mp4"
            autoPlay=""
            controls=""
            muted=""
            playsInline=""
            loop=""
            src={HeroVideo}
            poster={HeroImage}
          />
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
        <section className="product-post anti-aging-product">
          <div className="product-content-wrapper">
            <div className="product-content">
              <h3 className="product-title">Face Makeup</h3>
              <p className="product-text">
                Create a flawless canvas with our collection of face makeup.
                <br />
                <br />
                From foundations to concealers and blushes, discover the
                essentials for a radiant complexion.
              </p>
              <a href="#" className="product-link">
                See products
              </a>
            </div>
          </div>
          <img
            className="product-image"
            src={FaceImage}
            alt="a matured lady hoding a cat"
          />
        </section>
        <section className="product-post treatment-product">
          <img
            className="product-image"
            src={EyeImage}
            alt="a woman getting facial treatment"
          />
          <div className="product-content-wrapper">
            <div className="product-content">
              <h3 className="product-title">Eye Makeup</h3>
              <p className="product-text">
                Accentuate your eyes with our range of captivating eye makeup.
                <br />
                <br />
                Explore stunning eyeshadows, eyeliners, and mascaras to achieve
                mesmerizing looks that leave a lasting impression.
              </p>
              <a href="#" className="product-link">
                See products
              </a>
            </div>
          </div>
        </section>
        <section className="product-post product-product">
          <div className="product-content-wrapper">
            <div className="product-content">
              <h3 className="product-title">Lip Products</h3>
              <p className="product-text">
                Express yourself with our vibrant lipstick collection.
                <br />
                <br />
                Discover an array of shades and finishes that effortlessly
                elevate your pout and add a pop of color to any look.
              </p>
              <a href="#" className="product-link">
                See products
              </a>
            </div>
          </div>
          <img
            className="product-image"
            src={LipImage}
            alt="skincare products"
          />
        </section>
      </section>
    </>
  );
};

export default Home;
