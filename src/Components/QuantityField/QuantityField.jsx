import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./QuantityField.module.css";

export default function QuantityField({ id }) {
  const [cartItems, setCartItems] = useOutletContext();
  const [cartQuantity, setQuantity] = useState(
    cartItems[id]?.quantity > 0 ? cartItems[id].quantity : 1,
  );

  function handleQuantityChange(e, manualQuantity = null) {
    manualQuantity ? setQuantity(manualQuantity) : setQuantity(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const inputFieldValue = e.target.elements.quantityField.value;
    setCartItems((prev) => ({
      ...prev,
      [id]: { ...prev[id], quantity: Number(inputFieldValue) },
    }));
  }

  return (
    <div className={styles.clickedCartButtonDiv}>
      <button
        className={styles.quantityAddBtn}
        onClick={(e) => {
          const currentCount = cartItems[id].quantity + 1;
          handleQuantityChange(e, currentCount);
          setCartItems((prev) => ({
            ...prev,
            [id]: { ...prev[id], quantity: currentCount },
          }));
        }}
        disabled={cartItems[id].quantity >= 50}
      >
        <img
          className={styles.quantityAddIcon}
          src="/assets/icons/plus.svg"
          alt=""
        />
      </button>
      <form onSubmit={handleSubmit}>
        <input
          name="quantityField"
          className={styles.cartQuantity}
          type="number"
          min={0}
          max={50}
          value={cartQuantity}
          onChange={handleQuantityChange}
        />
      </form>
      <button
        className={styles.quantityRemoveBtn}
        onClick={(e) => {
          const currentCount = cartItems[id].quantity - 1;
          handleQuantityChange(e, currentCount);
          setCartItems((prev) => ({
            ...prev,
            [id]: { ...prev[id], quantity: currentCount },
          }));
        }}
        disabled={cartItems[id].quantity <= 0}
      >
        <img
          className={styles.quantityRemoveIcon}
          src="/assets/icons/minus.svg"
          alt=""
        />
      </button>
    </div>
  );
}
