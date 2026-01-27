import SectionTitle from "../../ui/section-title/SectionTitle";
import styles from "./About.module.css";
import AboutCard from "./AboutCard";

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
            <AboutCard
              subtitle="Due servizi, un solo partner"
              text="Sviluppiamo software su misura e forniamo sviluppatori e DevOps
                on-demand per rafforzare il tuo team."
            />

            <AboutCard
              subtitle="Qualità da software house, flessibilità globale"
              text="Un approccio ibrido che unisce standard da software house e una
              rete internazionale di talenti."
            />

            <AboutCard
              subtitle="Focus totale sul tuo business"
              text="Un referente locale e un team globale lavorano insieme per
              trasformare le esigenze in soluzioni."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
