import { useEffect, useState } from "react";
import "../App.css";
import { HiOutlineStar } from "react-icons/hi";
import Loader from "./Loader";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const ProductCard = ({ selectedCategory, subCategoryEndpoint }) => {
  const [makeupData, setMakeupData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 18;

  useEffect(() => {
    const fetchMakeupData = async () => {
      setIsLoading(true);
      let endpoints = [];

      if (selectedCategory === "all") {
        endpoints = subCategoryEndpoint;
      } else {
        endpoints = [
          `http://makeup-api.herokuapp.com/api/v1/products.json/?product_type=${selectedCategory}`,
        ];
      }

      try {
        const responses = await Promise.all(
          endpoints.map((endpoint) => fetch(endpoint))
        );
        const data = await Promise.all(
          responses.map((response) => response.json())
        );
        const mergedData = data.flat(); // Merge the data from multiple endpoints into a single array
        console.log(mergedData);
        setMakeupData(mergedData);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchMakeupData();
  }, [selectedCategory]);

  // Get the current page items based on itemOffset and itemsPerPage
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = makeupData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(makeupData.length / itemsPerPage);

  // Handle page click
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  return (
    <section className="products-page-content-container">
      <section className="products-showcase">
        {isLoading ? (
          <Loader />
        ) : (
          currentItems?.map((product) => (
            <div className="product-card-container" key={product.id}>
              <Link to={`/product/${product.id}`}>
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
              </Link>
            </div>
          ))
        )}
      </section>

      <div className="pagination-container">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="Previous"
          containerClassName="pagination"
          activeClassName="active"
        />
      </div>
    </section>
  );
};

export default ProductCard;
