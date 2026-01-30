import { useState, useEffect } from "react";

import styles from "./ItemList.module.css";

import ProductCard from "./ProductCard/ProductCard";

export default function ItemList({ setCount }) {
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
            item.category === "women's clothing"
        );
        setItems(filteredResponse);
      });
  }, [items]);

  return (
    <div className={`itemListDiv ${styles.itemListDiv}`}>
      {items.map((item) => (
        <ProductCard
          key={item.title}
          title={item.title}
          price={item.price}
          image={item.image}
          setCount={setCount}
        ></ProductCard>
      ))}
    </div>
  );
}
