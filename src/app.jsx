import React from 'react';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import { Login }from './login/login.jsx';
import { Home } from './home/home.jsx';
import { Favorites } from './favorites/favorites.jsx';
import './main.css';

export default function App() {
  return (
    <BrowserRouter>
        <div className="body">
            <header>
            <   h1>Find My Meal</h1>
                    <nav>
                        <menu className="navigation">
                            <li><NavLink to="/">Login</NavLink></li>
                            <li><NavLink to="/home">Home</NavLink></li>
                            <li><NavLink to="/favorites">Favorites</NavLink></li>
                        </menu>
                    </nav>
                    <hr />
                </header>
                
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>


                <footer>
                    <hr />
                    <span className="text-reset">Mark Bird</span>
                    <br />
                    <a href="https://github.com/mbird13/startup">GitHub</a>
                </footer>
        </div>
    </BrowserRouter>
  );
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }