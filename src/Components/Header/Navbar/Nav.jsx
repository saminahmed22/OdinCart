import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import HeaderActBtn from "./HeaderActBtn/HeaderActBtn.jsx";

import styles from "./Nav.module.css";

export default function Nav({ cartItems }) {
  const { pathname } = useLocation();
  const isStore = pathname.startsWith("/shop");

  return (
    <nav className={styles.nav}>
      <Link className={styles.HeaderActBtnLink} to={isStore ? "cart" : "shop"}>
        <HeaderActBtn cartItems={cartItems} isStore={isStore} />
      </Link>
    </nav>
  );
}
