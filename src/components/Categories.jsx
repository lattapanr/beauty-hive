import React, { useRef } from "react";
import FaceImage from "../assets/faceImg.jpg";
import EyeImage from "../assets/eyeImg.jpg";
import LipImage from "../assets/lipImg.jpg";
import "../App.css";
import { Link } from "react-router-dom";

import { motion, useScroll, useTransform } from "framer-motion";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id, src, alt }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="home-category-image-container">
      <Link to={`${id}`}>
        <div ref={ref}>
          <img src={src} alt={alt} className="home-category-image" />
          <motion.h3 style={{ y }}>{`${id} makeup`}</motion.h3>
        </div>
      </Link>
    </section>
  );
}
const Categories = () => {
  return (
    <section className="home-categories-container">
      <Image id="face" src={FaceImage} alt="A face" />
      <Image id="eye" src={EyeImage} alt="An eye" />
      <Image id="lip" src={LipImage} alt="Lips" />
    </section>
  );
};

export default Categories;
