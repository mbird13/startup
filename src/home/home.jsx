import React from "react";
import { Notification, MyNotifier } from "./Notifier";
import './home.css';

export function Home() {  
    
    const [notifications, setNotifications] = React.useState([]);

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

      const [mealType, setMealType] = React.useEffect('');
      const [allergies, setAllergies] = React.useEffect([]);

    return (
        <main className="home_main">
        <div>
            <form method="get" action="results" className="input-form">
                <h2>What's your next meal?</h2>
                    <label><input type="radio" name="meal" value="Breakfast" />Breakfast</label>
                    <label><input type="radio" name="meal" value="Dinner" />Dinner/Lunch</label>
                    <label><input type="radio" name="meal" value="Dessert" />Dessert</label>  
                    <label><input type="radio" name="meal" value="Vegan" />Vegan</label>
                    <label><input type="radio" name="meal" value="Vegetarian" />Vegetarian</label>  
                <br />
                <h2>Select Allegies</h2>
                    <label><input type="checkbox" name="preference" value="NoSeafood" />Allergic to Seafood</label>
                    <label><input type="checkbox" name="preference" value="NoNuts" />Allergic to Nuts</label>
                    <label><input type="checkbox" name="preference" value="NoEgg" />Allergic to Eggs</label>
                <br />
                <br />
                <button type="submit">Search</button>

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