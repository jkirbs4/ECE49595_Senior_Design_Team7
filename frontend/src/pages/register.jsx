import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Devine_Tree from '../../src/assets/Devine_Tree.png';
import play_button from '../../src/assets/play_button.png';

const Register = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate('/');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3001/api/send-thank-you', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setStatus(data.message || data.error);
    } catch (err) {
      setStatus('Error sending email');
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundImage: `url(${Devine_Tree})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1
        style={{
          fontSize: '4rem',
          fontFamily: "'Kaushan Script', cursive",
          marginBottom: '2rem',
          marginTop: '100px',
          textAlign: 'center',
        }}
      >
        Devine
      </h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '0.5rem 0.5rem',
          backgroundColor: '#fff',
          border: '8px solid #b2ffb2',
          borderRadius: '8px',
          maxWidth: '400px',
          maxHeight: '600px',
          margin: '0 auto',
        }}
      >
        <h2
          style={{
            color: '#1b671b',
            fontFamily: "'Lexend', sans-serif",
            fontSize: '3rem',
            margin: '0.5rem 0.5rem',
            fontWeight: '1000',
            textAlign: 'center',
          }}
        >
          Register
        </h2>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <label
            style={{
              color: '#000',
              fontFamily: "'Lexend', sans-serif",
              fontSize: '2rem',
              marginBottom: '0.5rem',
              fontWeight: '400',
              textAlign: 'center',
            }}
          >
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              backgroundColor: '#fff',
              color: '#000',
              border: '3px solid #000',
              borderRadius: '4px',
              padding: '0.5rem',
              margin: '0 auto 0.25rem',
              width: '65%',
              fontSize: '1.2rem',
            }}
          />

          <label
            style={{
              color: '#000',
              fontFamily: "'Lexend', sans-serif",
              fontSize: '2rem',
              marginBottom: '0.5rem',
              fontWeight: '400',
              textAlign: 'center',
            }}
          >
            Password
          </label>
          <input
            type="password"
            style={{
              backgroundColor: '#fff',
              color: '#000',
              border: '3px solid #000',
              borderRadius: '4px',
              padding: '0.5rem',
              margin: '0 auto 0.25rem',
              width: '65%',
              fontSize: '1.2rem',
            }}
          />

          <button
            type="submit"
            style={{
              marginTop: '1rem',
              padding: '0.5rem',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: '#1b671b',
              color: '#fff',
              fontSize: '1.2rem',
              cursor: 'pointer',
            }}
          >
            Register
          </button>
        </form>

        {/* Status Message */}
        <p style={{ textAlign: 'center', color: 'green', marginTop: '0.5rem' }}>{status}</p>

        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
          {/* <img
            src={play_button}
            alt="Login"
            style={{ height: '4rem', width: '4rem', cursor: 'pointer' }}
            onClick={handlePlayClick}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Register;
