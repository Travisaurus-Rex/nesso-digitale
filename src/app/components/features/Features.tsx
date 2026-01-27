import SectionHeader from "../section-header/SectionHeader";
import styles from "./Features.module.css";

export default function Features() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader
          title="La trasformazione digitale in azione"
          description="Dai processi manuali a quelli automatizzati: esempi concreti di come aiutiamo i nostri clienti a semplificare il lavoro quotidiano, ridurre gli errori e ottenere risultati misurabili."
        />
        <div className={styles.grid}>
          <div className={styles.leftColumn}>
            <div className={styles.feature}>
              <h3 className={styles.featureTitle}>
                Integrazione sito web e CRM
              </h3>
              <p className={styles.featureText}>
                Sincronizzazione automatica dei lead e tempi di risposta ridotti
                da ore a pochi minuti.
              </p>
            </div>

            <div className={styles.feature}>
              <h3 className={styles.featureTitle}>
                Automazione dei report di vendita mensili
              </h3>
              <p className={styles.featureText}>
                Tempo di reporting ridotto del 70%, con un risparmio di circa 40
                ore uomo al mese.
              </p>
            </div>
          </div>

          <div className={styles.centerColumn}>
            <img
              src="/features.png"
              alt="Team features"
              className={styles.image}
            />
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.feature}>
              <h3 className={styles.featureTitle}>
                Gestionale leggero su misura
              </h3>
              <p className={styles.featureText}>
                Processi centralizzati e attività amministrative quotidiane
                ridotte del 50%.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
