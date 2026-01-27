import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container + " container"}>
        <img src="/logo.svg" alt="Nesso Digitale" className={styles.logo} />

        <nav className={styles.nav}>
          <a href="#" className={styles.navLink}>
            Home
          </a>
          <a href="#" className={styles.navLink}>
            Servizi
          </a>
          <a href="#" className={styles.navLink}>
            Settori
          </a>
          <a href="#" className={styles.navLink}>
            Metodo dilavoro
          </a>
          <a href="#" className={styles.navLink}>
            Chi siamo
          </a>
        </nav>

        <button className={styles.button}>Contatti</button>
      </div>
    </header>
  );
}
