import React from "react";

export function Unauthenticated(props) {
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');

    async function loginUser() {
        localStorage.setItem('userName', userName);
        props.onLogin(userName);
    }

    async function registerUser() {
        localStorage.setItem('userName', userName);
        props.onLogin(userName);
    }

    return (
        <main>
            <div className="input-form">
            <h2>Login</h2>
            <form method="get" action="home">
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