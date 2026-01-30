import styles from "./ProductCard.module.css";

export default function ProductCard({
  title = "Title",
  price = "0",
  image = "null",
  setCount,
}) {
  return (
    <div className={styles.ProductCardDiv}>
      <div className={styles.imageDiv}>
        <img className={styles.productImage} src={image} alt="" />
      </div>
      <div className={styles.titleAndPriceDiv}>
        <h2 className={styles.productTitle}>{title}</h2>
        <h3 className={styles.productPrice}>${price}</h3>
      </div>
      <div className={styles.cardActDiv}>
        <button className={styles.buyNowBtn}>Buy now</button>
        <button
          className={styles.addCartBtn}
          onClick={() => setCount((prev) => prev + 1)}
        >
          Add to the cart
        </button>
      </div>
    </div>
  );
}
