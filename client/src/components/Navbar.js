import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login'); // e kthen te login
  };

  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
      <Link to="/">Home</Link> |{' '}
      {token ? (
        <>
          <Link to="/dashboard">Dashboard</Link> |{' '}
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
