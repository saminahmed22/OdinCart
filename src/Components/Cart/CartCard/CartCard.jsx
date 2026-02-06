import styles from "./CartCard.module.css";
import { useOutletContext } from "react-router-dom";

import QuantityField from "../../QuantityField/QuantityField";

export default function CartCard({ id }) {
  const [cartItems, setCartItems] = useOutletContext();
  const { title, price, image, quantity } = cartItems[id];
  const total = price * quantity;
  return (
    <div className={styles.cartCardDiv}>
      <div className={styles.cartCard}>
        <div className={styles.imgDiv}>
          <img
            title="Item image"
            className={styles.itemImage}
            src={image}
            alt="Item image"
          ></img>
        </div>
        <div className={styles.infoDiv}>
          <div className={styles.cardHeader}>
            <div title="Item title" className={styles.titleDiv}>
              {title}
            </div>
            <div className={styles.cartCardRemoveBtnDiv}>
              <button
                title="Remove item"
                aria-label="Remove item"
                className={styles.cartCardRemoveBtn}
                onClick={() => {
                  const cloneObj = structuredClone(cartItems);
                  delete cloneObj[id];
                  setCartItems(cloneObj);
                }}
              >
                <img
                  src="/assets/icons/deleteBlack.svg"
                  alt="Remove item button"
                />
              </button>
            </div>
          </div>
          <div className={styles.priceDiv}>
            <div title="Price" className={styles.price}>
              ${price}
            </div>
            <div title="Quantity Field" className={styles.quantity}>
              <QuantityField id={id}></QuantityField>
            </div>
            <div title="Total price for this item" className={styles.total}>
              ${total.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
