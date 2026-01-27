import SectionHeader from "../../ui/section-header/SectionHeader";
import ProjectCard from "./ProjectCard";
import styles from "./Transformation.module.css";

export default function Transformation() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader
          title="La trasformazione digitale, passo dopo passo"
          description="Esempi pratici di automazione che semplificano le attività operative e migliorano le performance aziendali."
        />

        <div className={styles.grid}>
          <ProjectCard
            image="/transformation.png"
            title="ArchiTech Digital Design —"
            description="Crafted ArchiTech Application. Includes 80+ layouts and style guides."
          />
          <ProjectCard
            image="/transformation.png"
            title="ArchiTech Digital Design —"
            description="Crafted ArchiTech Application. Includes 80+ layouts and style guides."
          />
          <ProjectCard
            image="/transformation.png"
            title="ArchiTech Digital Design —"
            description="Crafted ArchiTech Application. Includes 80+ layouts and style guides."
          />
        </div>
      </div>
    </section>
  );
}
