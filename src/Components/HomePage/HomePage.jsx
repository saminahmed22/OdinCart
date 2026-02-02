import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.HomePageDiv}>
      <div className={styles.sloganDiv}>
        <h1 className={styles.slogan}>Clothes that matters</h1>
        <h2 className={styles.slogaBranding}>Parisian.</h2>
      </div>
    </div>
  );
}
