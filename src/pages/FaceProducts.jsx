import { useState } from "react";
import ProductCard from "../components/ProductCard";

const FaceProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = ["all", "foundation", "blush", "bronzer"];

  const subCategoryEndpoint =
    selectedCategory === "all"
      ? "http://makeup-api.herokuapp.com/api/v1/products.json/?product_type=foundation&&?product_type=blush&&?product_type=bronzer"
      : `http://makeup-api.herokuapp.com/api/v1/products.json/?product_type=${selectedCategory}`;

  return (
    <main className="products-page-container">
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

      <ProductCard
        subCategoryEndpoint={subCategoryEndpoint}
        selectedCategory={selectedCategory}
      />
    </main>
  );
};

export default FaceProducts;
