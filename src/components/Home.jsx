import React from "react";

function Home() {
  const containerStyle = {
    padding: '50px 40px',
    backgroundColor: '#f9fafb',
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
      <h1 style={headingStyle}>Welcome to QuizMaster!</h1>
      <p style={paragraphStyle}>Your ultimate quiz destination to test and expand your knowledge.</p>
      <h5>We conduct test for academic purposes. Contact us to make your own subject quiz master.</h5>
    </div>
  );
}

export default Home;
