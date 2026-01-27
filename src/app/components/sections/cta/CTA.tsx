import Button from "../../ui/button/Button";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.ctaCard}>
          <div className={styles.card}>
            <span className={styles.eyebrow}>
              Attualmente disponibili per nuovi progetti
            </span>

            <h2 className={styles.title}>Interessato a collaborare con noi?</h2>

            <p className={styles.description}>
              Aiutiamo aziende e team a progettare e sviluppare soluzioni
              digitali efficaci. Raccontaci il tuo progetto e scopriamo insieme
              come possiamo trasformare le tue idee in risultati concreti.
            </p>

            <Button showIcon>Prenota una Consulenza</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
