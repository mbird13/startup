import React from "react";
import { useNavigate } from 'react-router-dom';

export function Authenticated({userName, onLogout}) {

    function logout() {
        localStorage.removeItem('userName');
        onLogout();
      }
    
    const navigate = useNavigate();

    return (
        <main>
            <h2> Welcome {userName}   </h2>
            <div>
                <button onClick={() => navigate('/home')} >Continue</button>
                <button onClick={() => logout()} >Logout</button>
            </div>
        </main>
    );
}