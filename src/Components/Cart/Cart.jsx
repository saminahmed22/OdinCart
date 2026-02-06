import { useOutletContext } from "react-router-dom";

import styles from "./Cart.module.css";

import CartCard from "./CartCard/CartCard";

export default function Cart() {
  const [cartItems, setCartItems] = useOutletContext();

  const totalPrice = Object.values(cartItems).reduce(
    (total, itemObj) => total + itemObj.price * itemObj.quantity,
    0,
  );

  if (totalPrice <= 0) {
    return (
      <div className={`itemListDiv ${styles.cartItemListDiv}`}>
        <div className={`${styles.cartList} ${styles.cartListEmpty}`}>
          <p>Cart is empty</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className={`itemListDiv ${styles.cartItemListDiv}`}>
        <div className={styles.cartList}>
          <div className={styles.cartRemoveBtnDiv}>
            <button
              title="Clear cart"
              aria-label="Clear cart"
              className={styles.cartRemoveBtn}
              onClick={() => {
                setCartItems({});
              }}
            >
              <img
                src="/assets/icons/deleteBlack.svg"
                alt="Remove all button"
              />
              <p>Clear cart</p>
            </button>
          </div>

          {Object.keys(cartItems).map(
            (id) =>
              cartItems[id].quantity > 0 && (
                <CartCard
                  key={`cart_${cartItems[id].title}`}
                  id={id}
                ></CartCard>
              ),
          )}
          <div className={styles.cartListFooter}>
            <div className={styles.cartListFooterTitle}>
              <b className={styles.cartListFooterTexts}>Net total</b>
            </div>
            <div className={styles.cartListFooterPrice}>
              <b className={styles.cartListFooterTexts}>
                ${totalPrice.toFixed(2)}
              </b>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
