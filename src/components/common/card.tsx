import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  name: string;
  description: string;
  tech: string[];
  liveLink?: string;
  github?: string;
  comingSoon?: boolean;
  image?: string;
}

const Card: React.FC<CardProps> = ({
  name,
  description,
  tech,
  liveLink = "",
  github = "",
  comingSoon = false,
  image = "",
}) => {
  const handleGithubClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (github) window.open(github, "_blank");
  };

  const handleCardClicked = () => {
    if (!comingSoon && liveLink) window.open(liveLink, "_blank");
  };

  return (
    <div className={styles.card} onClick={handleCardClicked}>
      <div className={styles.imageContainer}>
        {image && (
          <img src={image} alt={name} className={styles.cardImage} />
        )}
        {comingSoon && <span className={styles.comingSoon}>Coming Soon</span>}
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.techContainer}>
          {tech.map((t, i) => (
            <span key={i} className={styles.techBadge}>
              {t}
            </span>
          ))}
        </div>
        <div className={styles.actions}>
          {github && (
            <button onClick={handleGithubClicked} className={styles.button}>
              GitHub
            </button>
          )}
          {liveLink && !comingSoon && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(liveLink, "_blank");
              }}
              className={styles.button}
            >
              Live Demo
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
