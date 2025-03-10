import React from "react";

export function Unauthenticated(props) {
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');

    async function loginUser() {
        event.preventDefault();
        const response = await fetch(`/api/auth/login`, {
            method: 'post',
            body: JSON.stringify({ email: userName, password: password }),
            headers: {
                'Content-Type': 'application/json',
            },
         });
        if (response?.status == 200) {
            localStorage.setItem('userName', userName);
            props.onLogin(userName);
        } else {
            alert('Invalid username or password');
            const body = (await response).json();
            console.log(body);
        }
    }

    async function registerUser() {
        event.preventDefault();
        const response = await fetch(`/api/auth/create`, {
            method: 'post',
            body: JSON.stringify({ email: userName, password: password }),
            headers: {
                'Content-Type': 'application/json',
            },
         });
        if (response?.status == 200) {
            localStorage.setItem('userName', userName);
            props.onLogin(userName);
        } else {
            alert('Username taken');
            const body = await response.json();
            console.log(body);
        }
        
    }

    return (
        <main>
            <div className="input-form">
            <h2>Login</h2>
            <form>
                <input type="text" placeholder="email" value={userName} onChange={(e) => setUserName(e.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={() => loginUser()} disabled={!userName || !password}>
                    Login
                </button>
                <button onClick={() => registerUser()} disabled={!userName || !password}>
                    Register
                </button>
            </form>
            </div>
        </main>
    );
}