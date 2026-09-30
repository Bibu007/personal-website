import { useState } from "react";
import styles from "./Header.module.css";
import logo from "./images/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <header className={styles.header}>
      <a href="/">
        <img src={logo} className={styles.logo} />
      </a>
      <button
        className={styles.menuButton}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        ☰
      </button>

      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <a href="/about">Portfolio</a>
        <a href="/projects">Blog</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}
