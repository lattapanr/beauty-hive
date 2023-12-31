import { useState } from "react";
import ProductCategoryData from "../components/ProductCategoryData";

const LipProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = ["all", "lipstick", "lip_liner"];

  const subCategoryEndpoint = [
    "https://makeup-api.herokuapp.com/api/v1/products.json/?product_type=lipstick",
    "https://makeup-api.herokuapp.com/api/v1/products.json/?product_type=lip_liner",
  ];

  return (
    <section className="products-page-container">
      <h1>Lip Products</h1>
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

      <ProductCategoryData
        subCategoryEndpoint={subCategoryEndpoint}
        selectedCategory={selectedCategory}
      />
    </section>
  );
};

export default LipProducts;
