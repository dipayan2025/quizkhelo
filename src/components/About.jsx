import React from "react";

function About() {
  const containerStyle = {
    padding: '20px',
    backgroundColor: '#f4f4f4',
    textAlign: 'center',
    minHeight: 'calc(100vh - 60px)',
  };

  const headingStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
  };

  const paragraphStyle = {
    fontSize: '1.1rem',
    color: '#555',
    marginTop: '10px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>About Us</h1>
      <p style={paragraphStyle}>We are QuizMaster, a platform where you can test your knowledge with various quizzes on different topics! Currently it is working on the questions uploaded from the admin panel and very soon it will cover more questions.</p>
    </div>
  );
}

export default About;
