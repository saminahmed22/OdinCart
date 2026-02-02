import { Link } from "react-router";
import { useLocation } from "react-router-dom";

import HeaderActBtn from "./HeaderActBtn/HeaderActBtn.jsx";
import styles from "./Nav.module.css";

export default function Nav({ cartItems }) {
  const { pathname } = useLocation();
  const isShop = pathname.startsWith("/shop");

  return (
    <nav className={styles.nav}>
      <Link className={styles.HeaderActBtnLink} to={isShop ? "cart" : "shop"}>
        <HeaderActBtn cartItems={cartItems} isShop={isShop} />
      </Link>
    </nav>
  );
}
