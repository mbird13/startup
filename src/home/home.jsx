import React from "react";
import { MyNotifier } from "./Notifier";
import { useNavigate } from 'react-router-dom';

import './home.css';

export function Home() {  
    
    const [notifications, setNotifications] = React.useState([]);
    const navigate = useNavigate();

    React.useEffect(() => {
        MyNotifier.addHandler(handleNotification);
    
        return () => {
          MyNotifier.removeHandler(handleNotification);
        };
      }, []);

      function handleNotification(notification) {
        setNotifications((prevNotifications) => {
          let newNotifications = [notification, ...prevNotifications];
          if (newNotifications.length > 6) {
            newNotifications = newNotifications.slice(1, 3);
          }
          return newNotifications;
        });
      }

      function createMessageArray() {
        const messageArray = [];
        for (const [i, event] of notifications.entries()) {
          let message = `favorited ${event.value}`;
    
          messageArray.push(
            <li>{event.from.split('@')[0]} {message}</li>
          );
        }
        return messageArray;
      }

      const [mealType, setMealType] = React.useState('');
      const [allergies, setAllergies] = React.useState([]);

      const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
    
        setAllergies((prevAllergies) =>
          checked
            ? [...prevAllergies, value] // Add allergy if checked
            : prevAllergies.filter((allergy) => allergy !== value) // Remove allergy if unchecked
        );
      };

      function searchForRecipe() {
        if (mealType === '') {
          alert("Please select a meal type");
          return;
        }
        navigate("/results?meal={mealType}&allergies={allergies}")
      }

    return (
        <main className="home_main">
        <div>
            <form method="get" className="input-form">
                <h2>What's your next meal?</h2>
                    <label><input type="radio" name="meal" value="Breakfast" onChange={(e) => setMealType(e.target.value)}/>Breakfast</label>
                    <label><input type="radio" name="meal" value="Dinner" onChange={(e) => setMealType(e.target.value)}/>Dinner/Lunch</label>
                    <label><input type="radio" name="meal" value="Dessert" onChange={(e) => setMealType(e.target.value)}/>Dessert</label>  
                    <label><input type="radio" name="meal" value="Vegan" onChange={(e) => setMealType(e.target.value)}/>Vegan</label>
                    <label><input type="radio" name="meal" value="Vegetarian" onChange={(e) => setMealType(e.target.value)}/>Vegetarian</label>  
                <br />
                {/* <h2>Select Allegies</h2>
                    <label>
                        <input
                        type="checkbox"
                        value="NoSeafood"
                        checked={allergies.includes("NoSeafood")}
                        onChange={handleCheckboxChange}
                        />
                        Allergic to Seafood
                    </label>
                    <label>
                        <input
                        type="checkbox"
                        value="NoNuts"
                        checked={allergies.includes("NoNuts")}
                        onChange={handleCheckboxChange}
                        />
                        Allergic to Nuts
                    </label>
                    <label>
                        <input
                        type="checkbox"
                        value="NoEgg"
                        checked={allergies.includes("NoEgg")}
                        onChange={handleCheckboxChange}
                        />
                        Allergic to Eggs
                    </label> */}
                <br />
                <br />
                <button onClick={() => searchForRecipe()}>Search</button>

            </form>
        </div>

        <div className="notifications-bar">
            <h2>Notifications</h2>
            <ul>
                {createMessageArray()}
            </ul>
        </div>
        </main>

    );
}