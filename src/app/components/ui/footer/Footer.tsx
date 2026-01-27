import FooterColumn from "./FooterColumn";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <FooterColumn>
            <img src="/logo.svg" alt="Nesso Digitale" className={styles.logo} />
            <p className={styles.tagline}>
              Costruiamo soluzioni digitali che semplificano il lavoro, un
              progetto alla volta.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialLink}>
                G+
              </a>
              <a href="#" className={styles.socialLink}>
                f
              </a>
              <a href="#" className={styles.socialLink}>
                t
              </a>
              <a href="#" className={styles.socialLink}>
                in
              </a>
            </div>
          </FooterColumn>

          <FooterColumn title="Menus">
            <nav className={styles.nav}>
              <a href="#" className={styles.navLink}>
                Home
              </a>
              <a href="#" className={styles.navLink}>
                Metodo dilavaro
              </a>
              <a href="#" className={styles.navLink}>
                Servizi
              </a>
              <a href="#" className={styles.navLink}>
                Chi siamo
              </a>
              <a href="#" className={styles.navLink}>
                Settori
              </a>
            </nav>
          </FooterColumn>

          <FooterColumn title="Contatti">
            <a href="mailto:Support@mail.com" className={styles.contact}>
              Support@mail.com
            </a>
            <p className={styles.address}>
              Modulo LTD, Golden Plaza, 7 Nile Street, Cairo EG2R 6DA
            </p>
          </FooterColumn>
        </div>
      </div>
    </footer>
  );
}
