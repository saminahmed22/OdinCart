import styles from "./Cart.module.css";

export default function Cart({ cartItemCount = 0 }) {
  return (
    <div className="cartDiv">
      <button className={styles.button}>
        <p>Cart</p>
        {cartItemCount > 0 && (
          <div className={styles.cartCount}>{cartItemCount}</div>
        )}
      </button>
    </div>
  );
}
