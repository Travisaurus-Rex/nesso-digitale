import styles from "./Hero.module.css";
import Button from "../../ui/button/Button";
import BrandsList from "./BrandsList";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container + " container"}>
        <div className={styles.leftColumn}>
          <div className={styles.topSection}>
            <h1 className={styles.heading}>
              NESSO DIGITALE
              <br />
              <span className={styles.headingLab}>LAB</span>
            </h1>

            <Button showIcon={true}>Prenota una Consulenza</Button>
          </div>

          <BrandsList />
        </div>

        <div className={styles.sphereWrapper}>
          <img src="/grid.svg" alt="" className={styles.sphereGrid} />
          <img src="/sphere.png" alt="3D Sphere" className={styles.sphere} />
        </div>
      </div>
    </section>
  );
}
