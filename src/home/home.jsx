import React from "react";
import { MyNotifier } from "./Notifier";
import { useNavigate } from 'react-router-dom';

import './home.css';

const prompts = [" is cooking ", " is looking for ", " is eating ", " is preparing ", " is enjoying "];


export function Home({ userName }) {  
    
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
          let message;
          if (event.value == 'logged in' || event.value == 'disconnected') {
            message = `${event.from} ${event.value}`;
          } else {
            message = `${event.from} ${prompts[Math.floor(Math.random() * 5)]} ${event.value}`;
          }
    
          messageArray.push(
            <li>{message}</li>
          );
        }
        return messageArray;
      }

      const [mealType, setMealType] = React.useState('');


      function searchForRecipe() {
        event.preventDefault();
        if (mealType === '') {
          alert("Please select a meal type");
          return;
        }
        MyNotifier.sendNotification(userName, mealType);
        navigate("/results?meal=" + mealType);
      }

    return (
        <main className="home_main">
        <div>
            <form className="input-form">
                <h2>What's your next meal?</h2>
                    <label><input type="radio" name="meal" value="Breakfast" onChange={(e) => setMealType(e.target.value)}/>Breakfast</label>
                    <label><input type="radio" name="meal" value="Dinner" onChange={(e) => setMealType(e.target.value)}/>Dinner/Lunch</label>
                    <label><input type="radio" name="meal" value="Dessert" onChange={(e) => setMealType(e.target.value)}/>Dessert</label>  
                    <label><input type="radio" name="meal" value="Vegan" onChange={(e) => setMealType(e.target.value)}/>Vegan</label>
                    <label><input type="radio" name="meal" value="Vegetarian" onChange={(e) => setMealType(e.target.value)}/>Vegetarian</label>  
                <br />
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