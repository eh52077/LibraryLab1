import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Books from './pages/Books';
import BookDetails from './pages/BookDetails';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/books" element={<Books />}/>
        <Route path="/books/:id" element={<Books />}/>

        <Route path="/" element={<Login />} /> {/* redirect basic */}
      </Routes>
    </Router>
  );
}

export default App;
