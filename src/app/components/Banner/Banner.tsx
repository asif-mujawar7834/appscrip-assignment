import styles from "./Banner.module.css";
export const Banner = () => {
  return (
    <section className={styles.banner_container}>
      <div className={styles.mobile__nav__indicator}>
        <span>Home</span>
        <span></span>
        <span>Shop</span>
      </div>
      <h1>DISCOVER OUR PRODUCTS</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </p>
    </section>
  );
};
