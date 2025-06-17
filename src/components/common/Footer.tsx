import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2025 Vaibhav Saxena. All rights reserved.</p>
      <p style={styles.text}>
        Designed by{" "}
        <a href="https://github.com/vaibhav12saxena">Vaibhav Saxena</a>
      </p>
    </footer>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    backgroundColor: "var(--background-color)",
    position: "fixed",
    bottom: 0,
    width: "100%",
    marginTop: "50px",
    padding: "20px",
    borderTop: "1px solid #ccc",
    textAlign: "center",
  },
};

export default Footer;
