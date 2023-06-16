import { useState } from "react";
import ProductCard from "../components/ProductCard";

const EyeProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "eyebrow", "eyeshadow", "eyeliner", "mascara"];

  const subCategoryEndpoint =
    selectedCategory === "all"
      ? "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyebrow&&?product_type=eyeshadow&&?product_type=eyeliner&&?product_type=mascara"
      : `http://makeup-api.herokuapp.com/api/v1/products.json/?product_type=${selectedCategory}`;

  return (
    <main className="products-page-container">
      <h1>Eye Makeup</h1>
      <div className="sub-category-container">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "active" : ""}
          >
            {category}
          </button>
        ))}
      </div>

      <ProductCard
        subCategoryEndpoint={subCategoryEndpoint}
        selectedCategory={selectedCategory}
      />
    </main>
  );
};

export default EyeProducts;
