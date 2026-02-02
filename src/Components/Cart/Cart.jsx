import { useOutletContext } from "react-router-dom";

import styles from "./Cart.module.css";

import CartCard from "./CartCard/CartCard";

export default function Cart() {
  const [cartItems] = useOutletContext();
  const getTotalPrice = () => {
    let total = 0;
    Object.values(cartItems).map(
      (itemObj) => (total += itemObj.price * itemObj.quantity)
    );
    return total.toFixed(2);
  };

  const getCartContent = () => {
    if (getTotalPrice() > 0) {
      return (
        <div className={`itemListDiv ${styles.cartItemListDiv}`}>
          <div className={styles.cartList}>
            <div className={styles.cartListHeader}>
              <div className={styles.cartListHeaderTitle}>
                <b className={styles.cartListHeaderTexts}>Title</b>
              </div>
              <div className={styles.cartListHeaderPrices}>
                <div className={styles.headerPrice}>
                  <b className={styles.cartListHeaderTexts}>Price</b>
                </div>
                <div className={styles.headerQuantity}>
                  <b className={styles.cartListHeaderTexts}>Quantity</b>
                </div>
                <div className={styles.headerTotal}>
                  <b className={styles.cartListHeaderTexts}>Total</b>
                </div>
              </div>
            </div>
            {Object.values(cartItems).map((itemObj) => (
              <CartCard
                key={`cart_${itemObj.title}`}
                title={itemObj.title}
                price={itemObj.price}
                quantity={itemObj.quantity}
                image={itemObj.image}
              ></CartCard>
            ))}
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
