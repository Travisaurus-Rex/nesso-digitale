"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <img src="/logo.svg" alt="Nesso Digitale" className={styles.logo} />

        <nav className={styles.nav}>
          <a href="#" className={`${styles.navLink} ${styles.active}`}>
            Home
          </a>
          <a href="#" className={styles.navLink}>
            Servizi
          </a>
          <a href="#" className={styles.navLink}>
            Settori
          </a>
          <a href="#" className={styles.navLink}>
            Metodo di lavoro
          </a>
          <a href="#" className={styles.navLink}>
            Chi siamo
          </a>
        </nav>

        <button className={styles.button}>Contatti</button>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <button
            className={styles.close}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={32} />
          </button>

          <nav className={styles.mobileNav}>
            <a href="#">Home</a>
            <a href="#">Servizi</a>
            <a href="#">Settori</a>
            <a href="#">Metodo di lavoro</a>
            <a href="#">Chi siamo</a>
            <a href="#" className={styles.mobileCTA}>
              Contatti
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
