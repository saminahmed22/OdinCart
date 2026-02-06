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
        <img
          title="Item image"
          className={styles.productImage}
          src={image}
          alt="Item image"
        />
      </div>
      <div className={styles.titleAndPriceDiv}>
        <div className={styles.productNameAndReview}>
          <h2 title="Title" className={styles.productTitle}>
            {title}
          </h2>
          <div className={styles.productReview}>
            <img
              className={styles.reviewIcon}
              src="/assets/icons/star.svg"
              alt="Star icon"
            />
            <p title="Rating">
              {rating}({ratingCount})
            </p>
          </div>
        </div>

        <h3 title="Price" className={styles.productPrice}>
          ${price}
        </h3>
      </div>
      <div className={styles.cardActDiv}>
        <button title="Buy now" className={styles.buyNowBtn}>
          Buy now
        </button>

        {CartButton({ id, title, price, image, cartItems, setCartItems })}
      </div>
    </div>
  );
}
