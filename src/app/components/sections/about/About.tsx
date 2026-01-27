import styles from "./About.module.css";
import SectionTitle from "../section-title/SectionTitle";

export default function About() {
  return (
    <section className={styles.about}>
      <div className="container">
        <SectionTitle>Nesso Digitale</SectionTitle>

        <div className={styles.content}>
          <div className={styles.imageColumn}>
            <img src="/team.jpg" alt="Team" className={styles.image} />
          </div>

          <div className={styles.textColumn}>
            <div className={styles.block}>
              <h3 className={styles.subtitle}>Due servizi, un solo partner</h3>
              <p className={styles.text}>
                Sviluppiamo software su misura e forniamo sviluppatori e DevOps
                on-demand per rafforzare il tuo team.
              </p>
            </div>

            <div className={styles.block}>
              <h3 className={styles.subtitle}>
                Qualità da software house, flessibilità globale
              </h3>
              <p className={styles.text}>
                Un approccio ibrido che unisce standard da software house e una
                rete internazionale di talenti.
              </p>
            </div>

            <div className={styles.block}>
              <h3 className={styles.subtitle}>Focus totale sul tuo business</h3>
              <p className={styles.text}>
                Un referente locale e un team globale lavorano insieme per
                trasformare le esigenze in soluzioni.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
