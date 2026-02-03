import { useOutletContext } from "react-router-dom";
import styles from "./ProductCard.module.css";
import QuantityField from "../../QuantityField/QuantityField";

function CartButton({ id, title, price, image }) {
  const [cartItems, setCartItems] = useOutletContext();

  if (!cartItems[id]?.quantity) {
    return (
      <button
        className={styles.addCartBtn}
        onClick={() => {
          setCartItems((prev) => ({
            ...prev,
            [id]: {
              quantity: 1,
              title: title,
              price: price,
              image: image,
            },
          }));
        }}
      >
        Add to the cart
      </button>
    );
  } else {
    return <QuantityField id={id}></QuantityField>;
  }
}

export default function ProductCard({
  id,
  title = "Null",
  price = 0,
  image = "Null",
  rating = 0,
  ratingCount = 0,
  cartItems,
  setCartItems,
}) {
  return (
    <div className={styles.ProductCardDiv}>
      <div className={styles.imageDiv}>
        <img className={styles.productImage} src={image} alt="" />
      </div>
      <div className={styles.titleAndPriceDiv}>
        <div className={styles.productNameAndReview}>
          <h2 className={styles.productTitle}>{title}</h2>
          <div className={styles.productReview}>
            <img
              className={styles.reviewIcon}
              src="/assets/icons/star.svg"
              alt=""
            />
            <p>
              {rating}({ratingCount})
            </p>
          </div>
        </div>

        <h3 className={styles.productPrice}>${price}</h3>
      </div>
      <div className={styles.cardActDiv}>
        <button className={styles.buyNowBtn}>Buy now</button>

        {CartButton({ id, title, price, image, cartItems, setCartItems })}
      </div>
    </div>
  );
}
