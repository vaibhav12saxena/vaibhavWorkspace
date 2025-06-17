// pages/projects.tsx
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { projects } from "@/data/projects";
import Card from "@/components/common/card";

const Projects = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Projects</h1>
        <div style={styles.projectGrid}>
          {projects.map((project, index) => (
            <Card
              key={index}
              name={project.name}
              tech={project.tech}
              description={project.description}
              github={project.github}
              liveLink={project.liveLink}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  main: {
    flex: 1,
    padding: "2rem",
  },
  title: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  projectGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "2rem",
    justifyItems: "center",
  },
};

// Media query for larger screens
if (
  typeof window !== "undefined" &&
  window.matchMedia("(min-width: 1024px)").matches
) {
  styles.projectGrid = {
    ...styles.projectGrid,
    gridTemplateColumns: "repeat(3, 1fr)",
  };
}

export default Projects;
