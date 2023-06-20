import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";

const SearchProducts = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchSearchResults = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `https://makeup-api.herokuapp.com/api/v1/products.json?brand=${query}`
        );
        const data = await response.json();

        setSearchResults(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  // Get the current page items based on current Page and itemsPerPage
  const itemsPerPage = 12;
  const offset = currentPage * itemsPerPage;
  const currentItems = searchResults.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(searchResults.length / itemsPerPage);

  // Handle page click
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  return (
    <div className="search-product-container">
      {isLoading ? (
        <Loader />
      ) : (
        <section className="search-product-showcase">
          <h2>
            Product from <span>{query}</span>
          </h2>
          {searchResults.length > 0 ? (
            <ProductCard makeupData={currentItems} />
          ) : (
            <p>No results found.</p>
          )}
        </section>
      )}

      <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
    </div>
  );
};

export default SearchProducts;
