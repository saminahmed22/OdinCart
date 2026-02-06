import styles from "./HeaderActBtn.module.css";

export default function HeaderActBtn({ cartItems, isStore }) {
  const buttonTitle = isStore ? "Cart" : "Store";
  const count = Object.values(cartItems).reduce(
    (sum, item) => sum + item.quantity,
    0,
  );
  return (
    <div className="headerActButtonContainer">
      <button className={styles.actButton}>
        <div className={styles.actButtonTitle}>
          <img
            src={`/assets/icons/${buttonTitle}.svg`}
            alt={`${buttonTitle} icon`}
          />
          <p>{buttonTitle}</p>
        </div>
        {isStore && count >= 1 && (
          <div className={styles.countDiv}>
            <div className={styles.cartCount}>{count}</div>
          </div>
        )}
      </button>
    </div>
  );
}
