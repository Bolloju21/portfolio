import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  padding: 20px;
  background: #f4f4f4;
  text-align: center;

  h2 {
    color: #333;
  }

  p {
    margin-top: 10px;
    color: #555;
  }  
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const Card = styled.div`
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  width: 300px;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
    }

  h3 {
    color: #333;
    margin-bottom: 10px;
  }

  p {
    color: #555;
    line-height: 1.5;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <h2>About Me</h2>
      <p>
        Hi, I'm Vineeth Krishna, a passionate software developer specializing in
        building full-stack web applications. I have experience in React, ASP.NET Core, SQL, and
        creating seamless user experiences.
      </p>
      <CardsContainer>
        <Card>
          <h3>React Development</h3>
          <p>
            Proficient in building dynamic, responsive, and interactive user interfaces with React.
          </p>
        </Card>

        <Card>
          <h3>ASP.NET Core</h3>
          <p>
            Experienced in developing robust and scalable backend solutions using ASP.NET Core.
          </p>
        </Card>
        <Card>
          <h3>AutoCad</h3>
          <p>
          Efficiently transforming ideas into precise technical drawings using AutoCAD.
          </p>
        </Card>

        <Card>
          <h3>HTML & CSS</h3>
          <p>
            Adept at creating user-friendly designs that enhance usability and improve user satisfaction.
          </p>
        </Card>

        <Card>
          <h3>Database Management</h3>
          <p>
            Skilled in designing and managing relational databases with SQL for optimal performance.
          </p>
        </Card>
      </CardsContainer>


    </AboutSection>
  );
};

export default About;