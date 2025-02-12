import React from 'react';
import './main.css';

export default function App() {
  return <div className="body">
    <header>
            <nav>
                <menu class="navigation">
                    <li><a href="index.html">Login</a></li>
                    <li><a href="home.html">Home</a></li>
                    <li><a href="favorites.html">Favorites</a></li>
                </menu>
            </nav>
            <hr />
        </header>
        <div>
            Home
        </div>
        <footer>
            <hr />
            <span class="text-reset">Mark Bird</span>
            <br />
            <a href="https://github.com/mbird13/startup">GitHub</a>
        </footer>
  </div>;
}