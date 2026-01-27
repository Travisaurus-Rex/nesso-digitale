import { ArrowUpRight } from "lucide-react";
import styles from "./Hero.module.css";
import Button from "../../ui/button/Button";

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
        </div>

        <div className={styles.sphereWrapper}>
          <img src="/grid.svg" alt="" className={styles.sphereGrid} />
          <img src="/sphere.png" alt="3D Sphere" className={styles.sphere} />
        </div>
      </div>
    </section>
  );
}
