import Link from "next/link";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.greeting}>Hello, I&apos;m</p>
        <h1 className={styles.title}>Vaibhav Saxena</h1>
        <h2 className={styles.subtitle}>
          Staff Software Engineer &middot; IIT Delhi
        </h2>
        <p className={styles.description}>
          Building performant, scalable web applications with modern frontend
          architecture, intelligent tooling, and a focus on great user
          experiences.
        </p>

        <div className={styles.buttons}>
          <a href="/assets/vaibhav_resume.pdf" download className={styles.buttonPrimary}>
            Download Resume
          </a>
          <Link href="/projects" className={styles.buttonSecondary}>
            View Projects
          </Link>
        </div>

        <div className={styles.contact}>
          <a
            href="https://github.com/vaibhav12saxena"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/vaibhavsaxena2/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            LinkedIn
          </a>
          <a href="mailto:vaibhav.saxena.iitd@gmail.com" className={styles.contactLink}>
            Email
          </a>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <div className={styles.imageContainer}>
          <img src="/assets/profile.jpeg" alt="Vaibhav Saxena" className={styles.image} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
