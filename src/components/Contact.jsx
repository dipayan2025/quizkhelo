// src/components/Contact.jsx
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
console.table({
  SERVICE:  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  PUBLIC:   import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
});

function Contact() {
  // 1️⃣  reference to the native HTML <form>
  const formRef = useRef(null);

  // 2️⃣  UI state for feedback
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'error'

  // 3️⃣  handler
  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('sent');
      formRef.current.reset();            // clear the form
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  /* ————— inline styles (unchanged, trimmed for brevity) ————— */
  const containerStyle = { padding: 20, background: '#fff', minHeight: 'calc(100vh - 60px)', textAlign: 'center' };
  const inputStyle     = { padding: 10, marginBottom: 10, width: 250, borderRadius: 5, border: '1px solid #ccc', fontSize: '1rem' };
  const buttonStyle    = { padding: '10px 20px', background: '#3498db', color: '#fff', border: 'none',
                           borderRadius: 5, cursor: 'pointer', fontSize: '1rem', opacity: status === 'sending' ? 0.7 : 1,
                           pointerEvents: status === 'sending' ? 'none' : 'auto', transition: 'background-color .3s' };

  return (
    <div style={containerStyle}>
      <h1>Contact Us</h1>
      <p>If you have any questions or feedback, feel free to reach out!</p>

      <form ref={formRef} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/*  💡 names must match your EmailJS template variables */}
        <input    name="name"    type="text"    placeholder="Your Name"    style={inputStyle}     required />
        <input    name="email"   type="email"   placeholder="Your Email"   style={inputStyle}     required />
        <textarea name="message"                placeholder="Your Message" style={{ ...inputStyle, height: 100, resize: 'vertical' }} required />

        <button type="submit" style={buttonStyle}>
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </button>
      </form>

      {/* 🔔 lightweight feedback messages */}
      {status === 'sent'  && <p style={{ color: 'green', marginTop: 10 }}>Thanks! We’ll get back to you soon.</p>}
      {status === 'error' && <p style={{ color: 'red',   marginTop: 10 }}>Oops—something went wrong. Try again.</p>}
    </div>
  );
}

export default Contact;
