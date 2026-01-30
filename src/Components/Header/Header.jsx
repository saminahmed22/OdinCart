import { Link } from "react-router";

import Nav from "./Navbar/Nav.jsx";
import styles from "./Header.module.css";

export default function Header({ count }) {
  return (
    <header className={styles.header}>
      <Link className={styles.brandTitle} to="/">
        <h1>Parisian</h1>
      </Link>

      <Nav count={count}></Nav>
    </header>
  );
}
