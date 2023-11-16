import React, { useState } from 'react';

const loginContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  padding: '0px',
  backgroundColor: '#ffc0cb',
};

const loginButtonStyle = {
  backgroundColor: 'grey', // Warna merah pada tombol
  color: 'white', // Warna teks putih agar terlihat dengan baik
  padding: '10px',
  marginTop: '10px', // Jarak antara input dan tombol
  cursor: 'pointer', // Menampilkan ikon kursor pointer saat diarahkan ke tombol
};

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin({ username, password });
  };

  return (
    <div style={loginContainerStyle}>
      <h1>Login Kelompok 21</h1>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button style={loginButtonStyle} onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
