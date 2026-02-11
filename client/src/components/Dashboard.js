import React, { useEffect } from 'react';

function Dashboard() {

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      window.location.href = '/';
    }
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Mirë se erdhe në sistem 🎉</p>
    </div>
  );
}

export default Dashboard;
