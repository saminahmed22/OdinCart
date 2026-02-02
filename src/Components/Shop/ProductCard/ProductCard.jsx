import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./ProductCard.module.css";

function CartButton({ id, title, price, image }) {
  const [cartItems, setCartItems] = useOutletContext();
  const [cartQuantity, setQuantity] = useState(
    cartItems[id]?.quantity > 0 ? cartItems[id].quantity : 1
  );

  function handleQuantityChange(e, manualQuantity = null) {
    manualQuantity ? setQuantity(manualQuantity) : setQuantity(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const inputFieldValue = e.target.elements.quantityField.value;
    setCartItems((prev) => ({
      ...prev,
      [id]: { ...prev[id], quantity: Number(inputFieldValue) },
    }));
  }

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
    return (
      <div className={styles.clickedCartButtonDiv}>
        <button
          className={styles.quantityAddBtn}
          onClick={(e) => {
            const currentCount = cartItems[id].quantity + 1;
            handleQuantityChange(e, currentCount);
            setCartItems((prev) => ({
              ...prev,
              [id]: { ...prev[id], quantity: currentCount },
            }));
          }}
          disabled={cartItems[id].quantity >= 50}
        >
          <img
            className={styles.quantityAddIcon}
            src="/src/assets/icons/plus.svg"
            alt=""
          />
        </button>
        <form onSubmit={handleSubmit}>
          <input
            name="quantityField"
            className={styles.cartQuantity}
            type="number"
            min={0}
            max={50}
            value={cartQuantity}
            onChange={handleQuantityChange}
          />
        </form>
        <button
          className={styles.quantityRemoveBtn}
          onClick={(e) => {
            const currentCount = cartItems[id].quantity - 1;
            handleQuantityChange(e, currentCount);
            setCartItems((prev) => ({
              ...prev,
              [id]: { ...prev[id], quantity: currentCount },
            }));
          }}
        >
          <img
            className={styles.quantityRemoveIcon}
            src="/src/assets/icons/minus.svg"
            alt=""
          />
        </button>
      </div>
    );
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
              src="/src/assets/icons/star.svg"
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
