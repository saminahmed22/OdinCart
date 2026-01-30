import styles from "./CartBtn.module.css";

export default function CartBtn({ count }) {
  return (
    <div className="cartDiv">
      <button className={styles.button}>
        <p>Cart</p>
        {count > 0 && <div className={styles.cartCount}>{count}</div>}
      </button>
    </div>
  );
}
