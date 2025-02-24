import React from "react";
import { useLocation } from "react-router-dom";
import './results.css';

export function Results() {
    const location = useLocation();
    const {meal, allergies} = location.state || {}
    const [imgUrl, setImgUrl] = React.useState('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=');
    const [recipeName, setRecipeName] = React.useState('Finding the perfect recipe...');
    const [instructions, setInstructions] = React.useState('');


    React.useEffect(() => {
        setImgUrl("drunkennoodles.jpg");
        setRecipeName("Drunken Noodles");
        setInstructions("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
    }, []);
    
    return (
        <main className="results_main">
            <h2>Want to eat this?</h2>
            <img alt={recipeName} src={imgUrl} />
            <h3>{recipeName}</h3>
            <p>{instructions}</p>
            <form action="favorites" method="get">
                <button type="submit">Add to favorites</button>
            </form>
        </main>
    );
}