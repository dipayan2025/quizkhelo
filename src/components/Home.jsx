// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';   // npm i react-icons if you haven’t

function Home() {
  /*  ——— inline styles ——— */
  const container = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '80px 20px',
    minHeight: 'calc(100vh - 60px)',
    /* ✨ soft gradient background */
    background: 'linear-gradient(135deg,#f0f4ff 0%,#f8fbff 40%,#ffffff 100%)',
    textAlign: 'center',
  };

  const title = {
    fontSize: '3rem',
    fontWeight: '800',
    color: '#1f2937',
    marginBottom: '1rem',
    animation: 'fadeSlideDown 0.7s ease-in-out both',
  };

  const subtitle = {
    fontSize: '1.25rem',
    color: '#4b5563',
    maxWidth: 600,
    marginBottom: '2.5rem',
    lineHeight: 1.6,
    animation: 'fadeSlideDown 0.9s ease-in-out both',
  };

  const cta = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    padding: '14px 28px',
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#fff',
    background: '#4f46e5',
    borderRadius: 8,
    textDecoration: 'none',
    transition: 'background 0.25s',
    animation: 'fadeSlideDown 1.1s ease-in-out both',
  };

  /* ——— keyframes ——— */
  const styleTag = `
    @keyframes fadeSlideDown {
      0%   { opacity: 0; transform: translateY(-20px) scale(0.98); }
      100% { opacity: 1; transform: translateY(0)        scale(1); }
    }
    @media (prefers-reduced-motion: reduce) {
      @keyframes fadeSlideDown { from { opacity: 1; transform:none } to { opacity:1; transform:none } }
    }
  `;

  return (
    <>
      {/* inject keyframes */}
      <style>{styleTag}</style>

      <section style={container}>
        <h1 style={title}>Welcome to <span style={{ color: '#4f46e5' }}>QuizMaster</span>!</h1>

        <p style={subtitle}>
          Sharpen your mind, challenge friends, and discover new facts every day.<br />
          Ready to start? Click below and let the quiz begin!
        </p>

        <Link to="/quiz" style={cta}>
          <FaPlay size={18} /> Start Quiz
        </Link>
      </section>
    </>
  );
}

export default Home;
