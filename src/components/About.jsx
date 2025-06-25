import React from 'react';

function AboutPlatform() {
  const containerStyle = {
    padding: '40px 20px',
    backgroundColor: '#f0f4f8',
    borderRadius: '10px',
    margin: '20px auto',
    maxWidth: '800px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6',
  };

 

  const paragraphStyle = {
    fontSize: '1rem',
    marginBottom: '12px',
    textAlign: 'justify',
  };

  const signatureStyle = {
    marginTop: '20px',
    fontStyle: 'italic',
    fontWeight: '500',
    textAlign: 'center',
    color: '#555',
  };

  return (
    <div style={containerStyle}>
      
      <p style={paragraphStyle}>
        QuizMaster is your bite-sized gateway to curiosity. From pop culture and tech trivia to
        history, science, and everything in between, our quizzes give you a fun, five-minute brain
        workout whenever you want one.
      </p>
      <p style={paragraphStyle}>
        Currently, each quiz pulls questions from an admin-managed database to ensure quality and
        relevance. But that’s just the beginning. We’re working on exciting new features like:
      </p>
      <ul style={{ paddingLeft: '20px', marginBottom: '12px' }}>
        <li>🧠 Adaptive difficulty that scales with your score</li>
        <li>🏆 Community challenge modes with leaderboards</li>
        <li>🔥 Daily streaks and gamified badges</li>
        <li>🌐 A growing library of expert-curated topics</li>
      </ul>
      <p style={paragraphStyle}>
        Whether you’re studying, competing with friends, or just killing time productively—QuizMaster
        is your companion for smarter breaks.
      </p>
      <div style={signatureStyle}>Built with passion by Dipayan Lodh 💻❤️</div>
    </div>
  );
}

export default AboutPlatform;
