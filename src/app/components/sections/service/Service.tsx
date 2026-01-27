import { ArrowUpRight } from "lucide-react";
import styles from "./Service.module.css";
import SectionHeader from "../../ui/section-header/SectionHeader";

export default function Service() {
  return (
    <>
      <section className={styles.service + " container"}>
        <SectionHeader
          title="I nostri servizi"
          description="Questi servizi sono progettati per aiutare i clienti a costruire e
        far crescere il proprio brand attraverso strategie creative e
        soluzioni digitali innovative."
          className={styles.sectionHeader}
        />

        <div className={styles.grid}>
          <button className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Progetti su misura</h3>
              <ArrowUpRight className={styles.icon} />
            </div>
            <p className={styles.cardText}>
              Progettiamo e sviluppiamo applicazioni web e gestionali
              personalizzate, costruite sulle reali esigenze del tuo business.
            </p>
          </button>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Team on-demand</h3>
            <p className={styles.cardText}>
              Rafforza il tuo team con sviluppatori e DevOps esperti, pronti a
              integrarsi rapidamente nei tuoi processi.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
