import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import styles from "./Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          VS
        </Link>
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ""}`} />
        </button>
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          <Link href="/" className={styles.link} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" className={styles.link} onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/projects" className={styles.link} onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="/contact" className={styles.link} onClick={() => setMenuOpen(false)}>Contact</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;
