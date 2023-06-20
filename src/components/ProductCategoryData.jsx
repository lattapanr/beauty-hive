import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

const ProductCardCategoryData = ({ selectedCategory, subCategoryEndpoint }) => {
  const [makeupData, setMakeupData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

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

        setMakeupData(mergedData);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchMakeupData();
  }, [selectedCategory]);

  // Get the current page items based on current Page and itemsPerPage
  const itemsPerPage = 12;
  const offset = currentPage * itemsPerPage;
  const currentItems = makeupData.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(makeupData.length / itemsPerPage);

  // Handle page click
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <ProductCard makeupData={currentItems} />

          <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
        </div>
      )}
    </div>
  );
};

export default ProductCardCategoryData;
