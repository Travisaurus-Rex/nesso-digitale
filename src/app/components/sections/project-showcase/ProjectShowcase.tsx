// Component
import Image from "next/image";
import SectionHeader from "../section-header/SectionHeader";
import styles from "./ProjectShowcase.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectShowcase() {
  return (
    <section className={styles.showcase}>
      <div className="container">
        <SectionHeader
          title="Progetti digitali di cui siamo orgogliosi"
          description="Piattaforma e-commerce scalabile, progettata per offrire un’esperienza utente fluida e pagamenti sicuri."
        />
        <div className={styles.showcaseFlex}>
          <div className={styles.leftContent}>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>AC Milan App</h3>

              <p className={styles.projectDescription}>
                An official mobile experience crafted to bring fans closer to
                the club through performance-driven design and intuitive
                interaction.
              </p>

              <div className={styles.projectFooter}>
                <span className={styles.projectLabel}>Official App Milan</span>
                <div className={styles.navButtons}>
                  <button className={styles.navButton}>
                    <ChevronLeft />
                  </button>
                  <button
                    className={styles.navButton + " " + styles.navButtonBlue}
                  >
                    <ChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightImage}>
            {/* I tried usign Next/Image here but the transparency was not preserved! */}
            <img src="/mobile.png" alt="product-image" />
          </div>
        </div>
      </div>
    </section>
  );
}
