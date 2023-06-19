import { useState } from "react";
import ProductCategoryData from "../components/ProductCategoryData";

const EyeProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "eyebrow", "eyeshadow", "eyeliner", "mascara"];

  const subCategoryEndpoint = [
    "https://makeup-api.herokuapp.com/api/v1/products.json/?product_type=eyebrow",
    "https://makeup-api.herokuapp.com/api/v1/products.json/?product_type=eyeshadow",
    "https://makeup-api.herokuapp.com/api/v1/products.json/?product_type=eyeliner",
    "https://makeup-api.herokuapp.com/api/v1/products.json/?product_type=mascara",
  ];

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
            <p>{category}</p>
          </button>
        ))}
      </div>

      <ProductCategoryData
        subCategoryEndpoint={subCategoryEndpoint}
        selectedCategory={selectedCategory}
      />
    </main>
  );
};

export default EyeProducts;
