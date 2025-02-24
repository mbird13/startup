import React from 'react';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import { Login }from './login/login.jsx';
import { Home } from './home/home.jsx';
import { Favorites } from './favorites/favorites.jsx';
import { Results } from './results/results.jsx';
import { AuthState } from './login/AuthState.js';
import './main.css';

export default function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter>
        <div className="body">
            <header>
            <   h1>Find My Meal</h1>
                    <nav>
                        <menu className="navigation">
                            <li><NavLink to="/">
                                {authState === AuthState.Authenticated ? 'Logout: ' + userName : 'Login'} 
                            </NavLink></li>
                            <li><NavLink to="/home">Home</NavLink></li>
                            <li><NavLink to="/favorites">Favorites</NavLink></li>
                        </menu>
                    </nav>
                    <hr />
                </header>
                
                <Routes>
                    <Route path="/" element={
                        <Login 
                            userName={userName} 
                            authState={authState} 
                            onAuthChange={(userName, authState) => {
                                setAuthState(authState);
                                setUserName(userName);
                            }}
                        />} 
                    />
                    <Route path="/home" element={<Home />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/results" element={<Results />} />
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