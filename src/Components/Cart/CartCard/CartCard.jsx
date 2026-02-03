import styles from "./CartCard.module.css";
import { useOutletContext } from "react-router";

import QuantityField from "../../QuantityField/QuantityField";

export default function CartCard({
  id,
  title = null,
  price = 0,
  quantity = 0,
  image = null,
}) {
  const [cartItems, setCartItems] = useOutletContext();
  const total = price * quantity;
  return (
    <div className={styles.cartCardWithDelete}>
      <div className={styles.cartCard}>
        <div className={styles.titleDiv}>
          <img className={styles.image} src={image} alt="" />
          <div className={styles.title}>{title}</div>
        </div>
        <div className={styles.priceDiv}>
          <div className={styles.price}>${price}</div>
          <div className={styles.quantity}>
            <QuantityField id={id}></QuantityField>
          </div>
          <div className={styles.total}>${total.toFixed(2)}</div>
        </div>
      </div>
      <div className={styles.cartCardRemoveBtnDiv}>
        <button
          className={styles.cartCardRemoveBtn}
          onClick={() => {
            const cloneObj = structuredClone(cartItems);
            delete cloneObj[id];
            setCartItems(cloneObj);
          }}
        >
          <img src="/assets/icons/deleteBlack.svg" alt="Remove item button" />
        </button>
      </div>
    </div>
  );
}
