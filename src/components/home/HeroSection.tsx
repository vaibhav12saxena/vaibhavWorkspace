import React from "react";
import Link from "next/link"; // Adjust the import based on your routing library
const HeroSection = () => {
  return (
    <section style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.title}>Hi, I’m Vaibhav Saxena</h1>
        <h2 style={styles.subtitle}>Frontend Engineer | SDE-3 Aspirant</h2>
        <p style={styles.description}>
          Building performant, scalable, and elegant web applications.
        </p>
        <div style={styles.buttons}>
          <Link href="/about" style={styles.button}>
            View Resume
          </Link>
          <Link href="/projects" style={styles.button}>
            Projects
          </Link>
          <Link href="/contact" style={styles.button}>
            Contact
          </Link>
        </div>
      </div>

      <div style={styles.imageContainer}>
        <img src="/assets/profile.jpeg" alt="Profile" style={styles.image} />
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px 20px",
  },
  textContainer: {
    maxWidth: "600px",
    marginRight: "50px",
  },
  title: {
    fontSize: "36px",
    fontWeight: 700,
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "24px",
    fontWeight: 500,
    marginBottom: "20px",
  },
  description: {
    fontSize: "18px",
    marginBottom: "30px",
  },
  buttons: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#0070f3",
    color: "#fff",
    borderRadius: "5px",
    textDecoration: "none",
  },
  imageContainer: {
    width: "200px",
    height: "200px",
    overflow: "hidden",
    borderRadius: "50%",
    border: "2px solid #ddd", // optional nice border
    boxShadow: "0 0 10px rgba(0,0,0,0.1)", // optional shadow
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  },
  //   imageContainer: {
  //     maxWidth: "300px",
  //   },
  //   image: {
  //     width: "100%",
  //     borderRadius: "50%",
  //   },
};

export default HeroSection;
