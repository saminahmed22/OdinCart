import { Link } from "react-router";

import Cart from "./Cart/Cart.jsx";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link className={styles.cartLink} to="cart">
        <Cart></Cart>
      </Link>
    </nav>
  );
}
