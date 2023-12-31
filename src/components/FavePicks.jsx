import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const favoriteProductIds = [780, 530, 1046];

const FavePicks = () => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    const fetchFavoriteProducts = async () => {
      try {
        const endpoints = favoriteProductIds.map(
          (id) => `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`
        );
        const responses = await Promise.all(
          endpoints.map((endpoint) => fetch(endpoint))
        );
        const data = await Promise.all(
          responses.map((response) => response.json())
        );
        const filteredData = data.filter((product) => product !== null);
        setFavoriteProducts(filteredData); // Update the favoriteProducts state
      } catch (error) {
        console.error(error);
      }
    };

    fetchFavoriteProducts();
  }, []);

  return (
    <div id="products">
      <ProductCard makeupData={favoriteProducts} />
    </div>
  );
};

export default FavePicks;
