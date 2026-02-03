import styles from "./HeaderActBtn.module.css";

export default function HeaderActBtn({ cartItems, isShop }) {
  const getCount = () => {
    let count = 0;
    Object.values(cartItems).map((itemObj) => {
      count += itemObj.quantity;
    });

    return count;
  };
  const count = getCount();

  const getBtn = () => {
    if (isShop) {
      return (
        <button className={styles.actButton}>
          <div className={styles.cartBtnTitle}>
            <img src="/public/assets/icons/cart.svg" alt="Cart Icon" />
            <p>Cart</p>
          </div>
          {count > 0 && (
            <div className={styles.countDiv}>
              <div className={styles.cartCount}>{count}</div>
            </div>
          )}
        </button>
      );
    } else {
      return (
        <button className={styles.actButton}>
          <div className={styles.cartBtnTitle}>
            <img
              className={styles.storeIcon}
              src="/public/assets/icons/store.svg"
              alt="Cart Icon"
            />
            <p>Store</p>
          </div>
        </button>
      );
    }
  };

  return <div className="cartDiv">{getBtn()}</div>;
}
