import { useState } from "react";
import ProductCategoryData from "../components/ProductCategoryData";

const FaceProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = ["all", "foundation", "blush", "bronzer"];

  const subCategoryEndpoint = [
    "https://makeup-api.herokuapp.com/api/v1/products.json/?product_type=foundation",
    "https://makeup-api.herokuapp.com/api/v1/products.json/?product_type=blush",
    "https://makeup-api.herokuapp.com/api/v1/products.json/?product_type=bronzer",
  ];

  return (
    <section className="products-page-container">
      <h1>Face Makeup</h1>
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

export default FaceProducts;
