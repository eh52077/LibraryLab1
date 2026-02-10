import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
     <div className="container mt-4">
      <h1>Library System</h1>

      <Register />
      <hr />
      <Login />
    </div>
  );
}

export default App;
