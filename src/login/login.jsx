import React from "react";

export function Login() {
    return (
        <main>
            <div class="input-form">
            <h2>Login</h2>
            <form method="get" action="home">
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="password" />
                <button type="submit">Submit</button>
            </form>
            </div>
        </main>
    );
}