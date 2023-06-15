import { useEffect, useState } from "react";
import "../App.css";

const ProductCard = () => {
  const [makeupTypes, setMakeupTypes] = useState([]);

  useEffect(() => {
    const fetchMakeupData = async () => {
      try {
        const url = "http://makeup-api.herokuapp.com/api/v1/products.json";
        const response = await fetch(url);
        const data = await response.json();

        const filteredMakeupTypes = data
          .filter(
            (product) =>
              product.product_type === "foundation" ||
              product.product_type === "blush" ||
              product.product_type === "bronzer"
          )
          .reduce((acc, product) => {
            if (product.category && !acc.includes(product.category)) {
              acc.push(product.category);
            }
            return acc;
          }, []);

        setMakeupTypes(["all", ...filteredMakeupTypes]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMakeupData();
  }, []);

  return (
    <section className="products-page-wrapper">
      <section>
        <h1>Products</h1>
        <div className="sub-category-wrapper">
          {makeupTypes.map((category, index) => (
            <button key={index}>{category}</button>
          ))}
        </div>
      </section>
    </section>
  );
};

export default ProductCard;
