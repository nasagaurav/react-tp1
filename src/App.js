import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './style.css';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Admin from './Admin';
import User from './User';
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/User" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Login">Login</Link>
      </li>
      <li>
        <Link to="/Signup">Signup</Link>
      </li>
      <li>
        <Link to="/Admin">Admin</Link>
      </li>
      <li>
        <Link to="/User">User</Link>
      </li>
    </ul>
  );
}
