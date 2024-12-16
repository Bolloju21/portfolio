import React from "react";
import styled from "styled-components";

const ExperienceSection = styled.section`
  padding: 20px;
  background: #f9f9f9;
  text-align: center;

  h2 {
    margin-bottom: 20px;
  }

  .experience-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  .card {
    background: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    width: 300px;
    padding: 20px;
    text-align: left;
 

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
    }

    h3 {
      margin-top: 0;
      color: #333;
    }

    p {
      color: #666;
    }
  }
`;

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      description: "Developed scalable web applications and led a team of developers to achieve project goals.",
    },
    {
      title: "Project Manager",
      description: "Managed cross-functional teams and ensured timely delivery of projects within budget.",
    },
    {
      title: "UI/UX Designer",
      description: "Designed intuitive user interfaces and improved user experience across multiple platforms.",
    },
  ];

  return (
    <ExperienceSection id="experience">
      <h2>Experience</h2>
      <div className="experience-cards">
        {experiences.map((experience, index) => (
          <div className="card" key={index}>
            <h3>{experience.title}</h3>
            <p>{experience.description}</p>
          </div>
        ))}
      </div>
    </ExperienceSection>
  );
};

export default Experience;
