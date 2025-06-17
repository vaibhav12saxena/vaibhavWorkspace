import React, { useState } from "react";
import Image from "next/image";
interface CardProps {
  name: string;
  description: string;
  tech: string[];
  imageLink?: string;
  liveLink?: string;
  github?: string;
}

const Card: React.FC<CardProps> = ({
  name,
  description,
  tech,
  imageLink = "/assets/profile.jpeg",
  liveLink = "",
  github = "",
}) => {
  const [hovered, setHovered] = useState(false);

  const handleGithubClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (github) window.open(github);
  };

  const handleLiveLinkClicked = () => {
    window.open(liveLink);
  };
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...styles.card,
        transform: hovered ? "scale(1.02)" : "scale(1)",
        boxShadow: hovered
          ? "0 8px 24px rgba(0,0,0,0.2)"
          : "0 0 10px rgba(0,0,0,0.1)",
      }}
      onClick={handleLiveLinkClicked}
    >
      <div style={styles.imageContainer}>
        <Image
          src={imageLink}
          alt={`${name} project`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div style={styles.content}>
        <h2 style={styles.title}>{name}</h2>
        <p style={styles.description}>{description}</p>
        <div style={styles.techContainer}>
          {tech.map((t, i) => (
            <span key={i} style={styles.techBadge}>
              {t}
            </span>
          ))}
        </div>

        <div style={styles.actions}>
          {github && (
            <button onClick={handleGithubClicked} style={styles.button}>
              GitHub
            </button>
          )}
          {/* {liveLink && (
            <button style={styles.button} onClick={handleLiveLinkClicked}>
              Live
            </button>
          )} */}
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    width: "400px",
    height: "auto",
    margin: "20px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    overflow: "hidden",
    borderRadius: "10px",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: "200px",
  },
  content: {
    padding: "10px 0",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  title: {
    fontSize: "20px",
    fontWeight: 600,
    margin: 0,
  },

  description: {
    fontSize: "14px",
    color: "#555",
  },

  techContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
  },

  techBadge: {
    background: "#eee",
    padding: "4px 8px",
    borderRadius: "12px",
    fontSize: "12px",
  },

  actions: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },

  button: {
    padding: "6px 12px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#0070f3",
    color: "white",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default Card;
