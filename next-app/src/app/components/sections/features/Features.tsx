import SectionHeader from "../../ui/section-header/SectionHeader";
import FeatureItem from "./FeatureItem";
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
            <FeatureItem
              title="Integrazione sito web e CRM"
              text="Sincronizzazione automatica dei lead e tempi di risposta ridotti da ore a pochi minuti."
            />

            <FeatureItem
              title="Automazione dei report di vendita mensili"
              text="Tempo di reporting ridotto del 70%, con un risparmio di circa 40 ore uomo al mese."
            />
          </div>

          <div className={styles.centerColumn}>
            <img
              src="/features.png"
              alt="Team features"
              className={styles.image}
            />
          </div>

          <div className={styles.rightColumn}>
            <FeatureItem
              title="Gestionale leggero su misura"
              text="Processi centralizzati e attività amministrative quotidiane ridotte del 50%."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
