import React from "react";
import { useNavigate } from 'react-router-dom';

export function Authenticated({userName, onLogout}) {

    async function logout() {
        event.preventDefault();
        const response = await fetch(`/api/auth/logout`, {
            method: 'delete',
         });
        if (response?.status == 204) {
            localStorage.removeItem('userName');
            onLogout();
        } else {
            alert('Logout failed');
            const body = (await response).json();
            console.log(body);
        }
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