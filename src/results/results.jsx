import React from "react";
import './results.css';

export function Results() {
    return (
        <main className="results_main">
            <h2>Want to eat this?</h2>
            <img alt="Drunken Noodles" src="drunkennoodles.jpg" />
            <h3>Drunken Noodles</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <form action="favorites" method="get">
                <button type="submit">Add to favorites</button>
            </form>
        </main>
    );
}