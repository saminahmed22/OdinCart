import { Link } from "react-router";

import CartBtn from "./CartBtn/CartBtn.jsx";
import styles from "./Nav.module.css";

export default function Nav({ count }) {
  return (
    <nav className={styles.nav}>
      <Link className={styles.cartLink} to="cart">
        <CartBtn count={count} />
      </Link>
    </nav>
  );
}
