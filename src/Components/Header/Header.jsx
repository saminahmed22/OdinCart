import { Link } from "react-router-dom";

import Nav from "./Navbar/Nav.jsx";
import styles from "./Header.module.css";

export default function Header({ cartItems }) {
  return (
    <header className={styles.header}>
      <Link className={styles.brandTitle} to="/">
        <h1>Parisian</h1>
      </Link>
      <Nav cartItems={cartItems}></Nav>
    </header>
  );
}
