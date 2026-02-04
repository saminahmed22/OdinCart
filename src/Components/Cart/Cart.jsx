import { useOutletContext } from "react-router-dom";

import styles from "./Cart.module.css";

import CartCard from "./CartCard/CartCard";

export default function Cart() {
  const [cartItems, setCartItems] = useOutletContext();
  const getTotalPrice = () => {
    let total = 0;
    Object.values(cartItems).map(
      (itemObj) => (total += itemObj.price * itemObj.quantity),
    );
    return total.toFixed(2);
  };

  const getCartContent = () => {
    if (getTotalPrice() > 0) {
      return (
        <div className={`itemListDiv ${styles.cartItemListDiv}`}>
          <div className={styles.cartList}>
            <div className={styles.cartRemoveBtnDiv}>
              <button
                className={styles.cartRemoveBtn}
                onClick={() => {
                  setCartItems({});
                }}
              >
                <img
                  src="/assets/icons/deleteBlack.svg"
                  alt="Remove all button"
                />
                <p>Remove all</p>
              </button>
            </div>

            {Object.keys(cartItems).map(
              (id) =>
                cartItems[id].quantity > 0 && (
                  <CartCard
                    key={`cart_${cartItems[id].title}`}
                    id={id}
                    title={cartItems[id].title}
                    price={cartItems[id].price}
                    quantity={cartItems[id].quantity}
                    image={cartItems[id].image}
                  ></CartCard>
                ),
            )}
            <div className={styles.cartListFooter}>
              <div className={styles.cartListFooterTitle}>
                <b className={styles.cartListFooterTexts}>Net Total</b>
              </div>
              <div className={styles.cartListFooterPrice}>
                <b className={styles.cartListFooterTexts}>${getTotalPrice()}</b>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={`itemListDiv ${styles.cartItemListDiv}`}>
          <div className={`${styles.cartList} ${styles.cartListEmpty}`}>
            <p>Cart is empty</p>
          </div>
        </div>
      );
    }
  };

  return getCartContent();
}
