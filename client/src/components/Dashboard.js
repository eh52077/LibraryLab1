import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="container mt-4">
      <h2>Dashboard</h2>
      <p>Mirë se erdhe në sistem 🎉</p>

      <button 
        className="btn btn-primary mt-3"
        onClick={() => navigate("/books")}
      >
        Shiko Librat
      </button>
    </div>
  );
}

export default Dashboard;