import React from "react";
import './home.css';

export function Home() {    
    return (
        <main className="home_main">
        <div>
            <form method="get" action="results" className="input-form">
                <h2>What's your next meal?</h2>
                <label><input type="radio" name="meal" value="Breakfast" />Breakfast</label>
                <label><input type="radio" name="meal" value="Lunch" />Lunch</label>
                <label><input type="radio" name="meal" value="Dinner" />Dinner</label>    
                <br />
                <h2>How much time do you have?</h2>
                <label><input type="number" />minutes</label>
                <br />
                <button type="submit">Search</button>

            </form>
        </div>

        <div className="notifications-bar">
            <h2>Notifications</h2>
            <ul>
                <li>Claire is eating Miso Ramen today!</li>
                <li>James favorited Drunken Noodles</li>
                <li>Jimmy is eating Parmesan Chicken today!</li>
            </ul>
        </div>
        </main>

    );
}