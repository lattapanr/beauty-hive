// hooks
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HiOutlineStar } from "react-icons/hi";

const ProductDetails = () => {
  const { id } = useParams();
  //const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`
        );
        const data = await response.json();
        console.log(data);
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <main className="product-detail-container">
      <section className="product-detail-content">
        <section className="product-detail-hero">
          <h1>{product.name}</h1>
          <div className="product-detail-image-wrapper">
            <img src={product.api_featured_image} alt={product.name} />
          </div>
        </section>

        <section className="product-detail-content-container">
          <div className="product-detail-info-container">
            <div className="product-detail-info">
              <h2>{product.brand}</h2>
              <p>${product.price}</p>
              {product.rating ? (
                <p className="product-card-rating">
                  <HiOutlineStar size={10} />
                  {product.rating}
                </p>
              ) : (
                ""
              )}
            </div>

            <a
              href={product.product_link}
              target="_blank"
              rel="noopener"
              aria-label="link to brand's page"
            >
              Buy Now
            </a>
          </div>

          <section className="product-detail-color-options">
            <h3>Color options:</h3>
            <div className="product-detail-colors">
              {product.product_colors && product.product_colors.length > 0 ? (
                product.product_colors.map((color, index) => (
                  <div
                    key={`${color.colour_name}+${index}`}
                    className="product-detail-color-container"
                  >
                    <div
                      className="product-detail-color"
                      style={{ backgroundColor: `${color.hex_value}` }}
                    ></div>{" "}
                    <p>{color.colour_name}</p>
                  </div>
                ))
              ) : (
                <p>Unavailable</p>
              )}
            </div>
          </section>

          <section className="product-detail-description">
            <h3>Description:</h3>
            <p>{product.description ? product.description : "Unavilable"}</p>
          </section>

          <div className="product-detail-disclaimer">
            <h3>Disclaimer:</h3>

            <p>
              When you click on a product to make a purchase, you might notice
              that some of the product links have been taken down by the owner.
              It could be because they no longer sell those products.
            </p>
          </div>
        </section>

        {/* <button onClick={() => navigate(-1)}>go back</button> */}
      </section>
    </main>
  );
};

export default ProductDetails;
