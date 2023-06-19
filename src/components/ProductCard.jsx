import { Link } from "react-router-dom";
import { HiOutlineStar } from "react-icons/hi";

const ProductCard = ({ makeupData }) => {
  return (
    <section className="products-showcase">
      {makeupData.map((product) => (
        <div className="product-card-container" key={product.id}>
          <Link to={`/product/${product.id}`}>
            <div className="product-card">
              <div className="product-card-image">
                <img src={product.api_featured_image} alt={product.name} />
              </div>

              <div className="product-card-detail-container">
                <div className="product-card-brand">{product.brand}</div>

                <div className="product-card-name">{product.name}</div>

                <div className="product-card-price">${product.price}</div>

                {product.rating && (
                  <div className="product-card-rating">
                    <HiOutlineStar size={10} />
                    {product.rating}
                  </div>
                )}
              </div>

              <div className="product-card-color-container">
                {product.product_colors.slice(0, 33).map((color, index) => (
                  <div
                    key={`${color.colour_name}+${index}`}
                    className="product-card-color"
                    style={{ backgroundColor: `${color.hex_value}` }}
                  ></div>
                ))}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default ProductCard;
