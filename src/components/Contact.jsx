import React from "react";
function Contact() {
  const containerStyle = {
    padding: '20px',
    backgroundColor: '#fff',
    minHeight: 'calc(100vh - 60px)',
    textAlign: 'center',
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

  const formStyle = {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const inputStyle = {
    padding: '10px',
    marginBottom: '10px',
    width: '250px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
  };

  const buttonHoverStyle = {
    backgroundColor: '#2980b9',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Contact Us</h1>
      <p style={paragraphStyle}>If you have any questions or feedback, feel free to reach out to us!</p>
      <form style={formStyle}>
        <input type="text" placeholder="Your Name" style={inputStyle} />
        <input type="email" placeholder="Your Email" style={inputStyle} />
        <textarea placeholder="Your Message" rows="4" style={inputStyle}></textarea>
        <button
          style={buttonStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
