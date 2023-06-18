import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import ReactPaginate from "react-paginate";
import ProductCardItem from "../components/ProductCardItem";
import FavePicks from "../components/FavePicks";

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
          `https://makeup-api.herokuapp.com/api/v1/products.json/?product_type=${selectedCategory}`,
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
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <ProductCardItem makeupData={currentItems} />

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
        </div>
      )}
    </div>
  );
};

export default ProductCard;
