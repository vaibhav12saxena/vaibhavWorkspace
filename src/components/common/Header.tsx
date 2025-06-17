import React from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <nav style={styles.nav}>
          <Link href="/" style={styles.link}>
            Home
          </Link>
          <Link href="/projects" style={styles.link}>
            Projects
          </Link>
          <Link href="/about" style={styles.link}>
            About
          </Link>
          <Link href="/contact" style={styles.link}>
            Contact
          </Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    padding: "var(--spacing-lg)",
    borderBottom: "1px solid var(--light-gray)",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  nav: {
    display: "flex",
    gap: "var(--spacing-xl)",
  },
  link: {
    textDecoration: "none",
    color: "var(--text-color)",
    fontWeight: "bold",
  },
};

export default Header;
