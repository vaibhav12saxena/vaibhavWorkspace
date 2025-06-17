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
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
