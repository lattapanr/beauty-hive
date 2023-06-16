import { useEffect, useState } from "react";
import "../App.css";
import { HiOutlineStar } from "react-icons/hi";
import Loader from "./Loader";

const ProductCard = () => {
  const [makeupData, setMakeupData] = useState([]);
  const [colors, setColors] = useState([]);
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const categories = ["all", "foundation", "blush", "bronzer"];

  useEffect(() => {
    const fetchMakeupData = async () => {
      try {
        const url =
          "http://makeup-api.herokuapp.com/api/v1/products.json/?product_type=foundation&&?product_type=bronzer&&?product_type=blush";
        const response = await fetch(url);
        const data = await response.json();

        setMakeupData(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchMakeupData();
  }, []);

  return (
    <section className="products-page-content-container">
      <div className="sub-category-container">
        {categories.map((category) => (
          <button key={category}>{category}</button>
        ))}
      </div>

      <section className="products-showcase">
        {isLoading ? (
          <Loader />
        ) : (
          makeupData?.map((product) => (
            <div className="product-card-container" key={product.id}>
              <div className="product-card">
                <div className="product-card-color-container">
                  {product.product_colors.map((color, index) => (
                    <div
                      key={`${color.colour_name}+${index}`}
                      className="product-card-color"
                      style={{ backgroundColor: `${color.hex_value}` }}
                    ></div>
                  ))}
                </div>

                <div className="product-card-image">
                  <img src={product.api_featured_image} alt={product.name} />
                </div>

                <div className="product-card-detail-container">
                  <div className="product-card-brand">{product.brand}</div>

                  <div className="product-card-name">{product.name}</div>

                  <div className="product-card-price">${product.price}</div>

                  {product.rating ? (
                    <div className="product-card-rating">
                      <HiOutlineStar size={10} />
                      {product.rating}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </section>
    </section>
  );
};

export default ProductCard;
