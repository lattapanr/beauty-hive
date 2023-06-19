import HeroImage from "../assets/heroImg.jpg";
import HeroVideo from "../assets/heroVideo.mp4";
import Categories from "../components/Categories";
import FavePicks from "../components/FavePicks";

const Home = () => {
  return (
    <>
      <main className="landing-page">
        <div className="video-container">
          <video autoPlay controls muted playsInline loop poster={HeroImage}>
            <source src={HeroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="landing-page-overlay" />
        <section className="main-content">
          <div className="hero-heading">
            <p>Hey there,</p>
            <h1> Come pick your new fav makeup items!</h1>
          </div>
          <p>
            Explore a world of makeup. Discover and shop top-quality cosmetics
          </p>
          <div className="down-arrow" />
        </section>
      </main>

      <section className="recommendation">
        <FavePicks />
      </section>

      <section className="product-category-container">
        <Categories />
      </section>
    </>
  );
};

export default Home;
