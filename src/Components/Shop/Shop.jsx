import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import styles from "./Shop.module.css";

import ProductCard from "./ProductCard/ProductCard";

export default function Shop() {
  const [cartItems, setCartItems] = useOutletContext();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => {
        const filteredResponse = response.filter(
          (item) =>
            item.category === "men's clothing" ||
            item.category === "women's clothing",
        );
        setItems(filteredResponse);
      });
  }, []);

  return (
    <div className={`itemListDiv ${styles.itemListDiv}`}>
      {items.map((item, index) => (
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
      ))}
    </div>
  );
}
