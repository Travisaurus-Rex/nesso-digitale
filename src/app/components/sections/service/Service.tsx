import { ArrowUpRight } from "lucide-react";
import styles from "./Service.module.css";
import ServiceCard from "./ServiceCard";
import SectionHeader from "../../ui/section-header/SectionHeader";

export default function Service() {
  return (
    <section className={`${styles.service} container`}>
      <SectionHeader
        title="I nostri servizi"
        description="Questi servizi sono progettati per aiutare i clienti a costruire e
        far crescere il proprio brand attraverso strategie creative e
        soluzioni digitali innovative."
        className={styles.sectionHeader}
      />

      <div className={styles.grid}>
        <ServiceCard
          as="button"
          featured
          title="Progetti su misura"
          text="Progettiamo e sviluppiamo applicazioni web e gestionali personalizzate, costruite sulle reali esigenze del tuo business."
          icon={<ArrowUpRight />}
        />

        <ServiceCard
          title="Team on-demand"
          text="Rafforza il tuo team con sviluppatori e DevOps esperti, pronti a integrarsi rapidamente nei tuoi processi."
        />
      </div>
    </section>
  );
}
