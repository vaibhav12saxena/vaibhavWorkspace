import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.links}>
          <a
            href="https://github.com/vaibhav12saxena"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/vaibhavsaxena2/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            LinkedIn
          </a>
          <a href="mailto:vaibhav.saxena.iitd@gmail.com" className={styles.socialLink}>
            Email
          </a>
        </div>
        <p className={styles.text}>&copy; {new Date().getFullYear()} Vaibhav Saxena</p>
      </div>
    </footer>
  );
};

export default Footer;
