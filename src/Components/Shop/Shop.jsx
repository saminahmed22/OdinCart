import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import styles from "./Shop.module.css";
import fetchItems from "../../api";

import ProductCard from "./ProductCard/ProductCard";
import ErrorPage from "../../ErrorPage";

export default function Shop() {
  const [cartItems, setCartItems] = useOutletContext();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getItems = async () => {
      const response = await fetchItems();
      if (response === "Error") {
        setError(true);
        setLoading(false);
      } else {
        const filteredResponse = response.filter(
          (item) =>
            item.category === "men's clothing" ||
            item.category === "women's clothing",
        );
        setItems(filteredResponse);
        setLoading(false);
      }
    };

    getItems();
  }, []);

  return (
    <div className={`itemListDiv ${styles.itemListDiv}`}>
      {loading ? (
        <div className={styles.loadingText}>Loading items...</div>
      ) : error ? (
        <div className={styles.loadingText}>Haha, something happed</div>
      ) : (
        items.map((item, index) => (
          <ProductCard
            key={item.title}
            id={index}
            title={item.title}
            price={item.price}
            image={item.image}
            rating={item.rating.rate}
            ratingCount={item.rating.count}
            cartItems={cartItems}
            setCartItems={setCartItems}
          ></ProductCard>
        ))
      )}
    </div>
  );
}
