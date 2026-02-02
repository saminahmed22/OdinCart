import styles from "./CartCard.module.css";

export default function CartCard({
  title = null,
  price = 0,
  quantity = 0,
  image = null,
}) {
  const total = price * quantity;
  return (
    <div className={styles.cartCard}>
      <div className={styles.titleDiv}>
        <img className={styles.image} src={image} alt="" />
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.priceDiv}>
        <div className={styles.price}>${price}</div>
        <div className={styles.quantity}>{quantity}</div>
        <div className={styles.total}>${total}</div>
      </div>
    </div>
  );
}
