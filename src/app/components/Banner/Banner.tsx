import styles from "./Banner.module.css";
export const Banner = () => {
  return (
    <section className={styles.banner_container}>
      <div className={styles.mobile__nav__indicator}>
        <span className={styles.home__indicator}>Home</span>
        <span className={styles.separator}></span>
        <span className={styles.currentlink}>Shop</span>
      </div>
      <h1>DISCOVER OUR PRODUCTS</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </p>
    </section>
  );
};
