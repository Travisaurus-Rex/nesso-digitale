import styles from "./Hero.module.css";

export default function BrandsList() {
  return (
    <div>
      <p className={styles.brandsTitle}>Brands that work with us</p>
      <div className={styles.brandsList}>
        <img src="/brands/niscala.svg" alt="niscala" />
        <img src="/brands/samtiv.svg" alt="samtiv" />
        <img src="/brands/iea.svg" alt="IEA" />
        <img src="/brands/slavica.svg" alt="slavica" />
        <img src="/brands/unica.svg" alt="unica" />
        <img src="/brands/boking.svg" alt="boxing" />
      </div>
    </div>
  );
}
