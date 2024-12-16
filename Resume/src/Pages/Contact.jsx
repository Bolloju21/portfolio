// import React from "react";
// import styled from "styled-components";

// const ContactSection = styled.section`
//   padding: 40px;
//   background: linear-gradient(135deg, #1e1e1e, #333);
//   color: white;
//   text-align: center;
//   border-radius: 10px;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

//   h2 {
//     font-size: 2rem;
//     margin-bottom: 20px;
//     color: #f4f4f4;
//   }

//   p {
//     margin: 10px 0;
//     font-size: 1.1rem;
//   }

//   a {
//     color: #1db954;
//     font-weight: bold;
//     text-decoration: none;
//     transition: color 0.3s ease;

//     &:hover {
//       color: #1ed760;
//       text-decoration: underline;
//     }
//   }

//   .contact-info {
//     margin: 0 auto;
//     max-width: 500px;
//     padding: 20px;
//     background: #222;
//     border-radius: 8px;
//   }
// `;

// const Contact = () => {
//   return (
//     <ContactSection id="contact">
//       <h2>Contact</h2>
//       <div className="contact-info">
//         <p>Email: <a href="mailto:bollojuvineethkrishna@gmail.com">bollojuvineethkrishna@gmail.com</a></p>
//         <p>
//           LinkedIn: 
//           <a href="https://www.linkedin.com/in/mohana-vineeth-krishna-bolloju-4283b21b9/" target="_blank" rel="noopener noreferrer">
//             Vineeth Krishna
//           </a>
//         </p>
//         <p>
//           GitHub: 
//           <a href="https://github.com/Bolloju21" target="_blank" rel="noopener noreferrer">
//             Vineeth Krishna
//           </a>
//         </p>
//       </div>
//     </ContactSection>
//   );
// };

// export default Contact;




// import React from "react";
// import styled from "styled-components";

// const ContactSection = styled.section`
//   padding: 40px;
//   background: linear-gradient(135deg, #1e1e1e, #333);
//   color: white;
//   text-align: center;
//   border-radius: 10px;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

//   h2 {
//     font-size: 2rem;
//     margin-bottom: 20px;
//     color: #f4f4f4;
//   }

//   .contact-cards {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     gap: 20px;
//     margin-top: 20px;
//   }

//   .card {
//     background: #222;
//     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
//     border-radius: 10px;
//     padding: 20px;
//     width: 300px;
//     text-align: left;
//     transition: transform 0.3s ease, box-shadow 0.3s ease;

//     &:hover {
//       transform: translateY(-5px);
//       box-shadow: 0 6px 10px rgba(0, 0, 0, 0.5);
//     }

//     h3 {
//       margin-top: 0;
//       color: #1db954;
//     }

//     p {
//       margin: 10px 0;
//       color: #f4f4f4;
//     }

//     a {
//       color: #1db954;
//       font-weight: bold;
//       text-decoration: none;
//       transition: color 0.3s ease;

//       &:hover {
//         color: #1ed760;
//         text-decoration: underline;
//       }
//     }
//   }
// `;

// const Contact = () => {
//   return (
//     <ContactSection id="contact">
//       <h2>Contact</h2>
//       <div className="contact-cards">
//         <div className="card">
//           <h3>Email</h3>
//           <p>
//             <a href="mailto:bollojuvineethkrishna@gmail.com">bollojuvineethkrishna@gmail.com</a>
//           </p>
//         </div>
//         <div className="card">
//           <h3>LinkedIn</h3>
//           <p>
//             <a
//               href="https://www.linkedin.com/in/mohana-vineeth-krishna-bolloju-4283b21b9/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Vineeth Krishna
//             </a>
//           </p>
//         </div>
//         <div className="card">
//           <h3>GitHub</h3>
//           <p>
//             <a
//               href="https://github.com/Bolloju21"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Vineeth Krishna
//             </a>
//           </p>
//         </div>
//       </div>
//     </ContactSection>
//   );
// };

// export default Contact;




import React from "react";
import styled from "styled-components";

const ContactSection = styled.section`
  padding: 40px;
  background: linear-gradient(135deg, #1e1e1e, #333);
  color: white;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #f4f4f4;
  }

  .contact-list {
    list-style: none;
    margin: 0;
    padding: 0;
    max-width: 600px;
    margin: 0 auto;
    text-align: left;
  }

  .contact-item {
    margin-bottom: 20px;
    text-align: center;
    padding: 20px;
    background: #222;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.5);
    }

    h3 {
      margin: 0 0 10px;
      color: #1db954;
    }

    p {
      margin: 0;
      color: #f4f4f4;
    }

    a {
      color: #1db954;
      font-weight: bold;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #1ed760;
        text-decoration: underline;
      }
    }
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <h2>Contact</h2>
      <ul className="contact-list">
        <li className="contact-item">
          <h3>Email</h3>
          <p>
            <a href="mailto:bollojuvineethkrishna@gmail.com">bollojuvineethkrishna@gmail.com</a>
          </p>
        </li>
        <li className="contact-item">
          <h3>LinkedIn</h3>
          <p>
            <a
              href="https://www.linkedin.com/in/mohana-vineeth-krishna-bolloju-4283b21b9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vineeth Krishna
            </a>
          </p>
        </li>
        <li className="contact-item">
          <h3>GitHub</h3>
          <p>
            <a
              href="https://github.com/Bolloju21"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vineeth Krishna
            </a>
          </p>
        </li>
      </ul>
    </ContactSection>
  );
};

export default Contact;
