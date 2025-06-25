// src/components/Footer.jsx
import React, { useEffect, useState } from 'react';

function Footer() {
  /* ─────────── live time ─────────── */
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1_000);
    return () => clearInterval(id);
  }, []);

  /* ─────────── weather (Open-Meteo) ───────────
     Coordinates below are roughly for Assam, India.
     Replace latitude / longitude with whatever location you prefer.
  */
  const [tempC, setTempC] = useState(null);
  useEffect(() => {
    const fetchWeather = () => {
      fetch(
        'https://api.open-meteo.com/v1/forecast' +
        '?latitude=26.2&longitude=91.7&current_weather=true'
      )
        .then(r => r.json())
        .then(data => setTempC(Math.round(data.current_weather.temperature)))
        .catch(() => setTempC('—'));
    };
    fetchWeather();                       // first load
    const id = setInterval(fetchWeather, 1_800_000); // every 30 min
    return () => clearInterval(id);
  }, []);

  /* ─────────── helpers ─────────── */
  const pad = n => String(n).padStart(2, '0');
  const dateStr = `${pad(now.getDate())}-${pad(now.getMonth() + 1)}-${now.getFullYear()}`;
  const timeStr = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

  /* ─────────── styles ─────────── */
  const footerStyle = {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    fontSize: '14px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    width: '100%',
    position: 'fixed',
    left: '0',
    bottom: '0',
  };

  const footerLinksStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  const copyStyle = { fontSize: '12px' };
  const infoStyle = { fontSize: '12.5px', opacity: 0.9 };

  /* ─────────── render ─────────── */
  return (
    <footer style={footerStyle}>
      {/* social links */}
      <div style={footerLinksStyle}>
        {[
          ['Facebook',  'https://www.facebook.com'],
          ['LinkedIn',  'https://www.linkedin.com/in/dipayan-lodh-855111212/'],
          ['Instagram', 'https://www.instagram.com/dipayan_ig'],
        ].map(([label, url]) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
            onMouseOver={e => (e.target.style.textDecoration = 'underline')}
            onMouseOut={e => (e.target.style.textDecoration = 'none')}
          >
            {label}
          </a>
        ))}
      </div>

      {/* live date-time + temperature */}
      <div style={infoStyle}>
        {dateStr} &nbsp;|&nbsp; {timeStr} &nbsp;|&nbsp; {tempC !== null ? `${tempC} °C` : '— °C'}
      </div>

      {/* copyright */}
      <div style={copyStyle}>
         Dipayan Lodh | All rights reserved.
      </div>
      <div style={{ fontSize: '12.5px', opacity: 0.85 }}>
  Made&nbsp;with&nbsp;❤️&nbsp;Dipayan Lodh&nbsp;© {now.getFullYear()} QuizMaster
</div>
    </footer>
  );
}

export default Footer;
