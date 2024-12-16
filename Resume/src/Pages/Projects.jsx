import React from "react";
import styled from "styled-components";

const ProjectsSection = styled.section`
  padding: 20px;

  h2 {
    text-align: center;
    color: #333;
  }

  h3 {
    text-align: center;
    color: #333;
  }

    p {
    text-align: center;
    color: #333;
  }



  .project {
    margin: 20px 0;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background: #fff;
  }

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Projects = () => {
  const projectList = [
    {
      title: "Self Curing Concrete Using Bio-Admixture",
      description: "Using Spinach as a Bio-Admixture and curing the concrete without adding water.",
     
    }
  ];

  return (
    <ProjectsSection id="projects">
      <h2>Projects</h2>
      {projectList.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </ProjectsSection>
  );
};

export default Projects;