import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { projects } from "@/data/projects";
import Card from "@/components/common/card";
import styles from "./projects.module.css";

const Projects = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.subtitle}>
          Things I&apos;ve built, from frontend systems to intelligent applications.
        </p>
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <Card
              key={index}
              name={project.name}
              tech={project.tech}
              description={project.description}
              github={project.github}
              liveLink={project.liveLink}
              comingSoon={"comingSoon" in project ? project.comingSoon : false}
              image={"image" in project ? project.image : ""}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
