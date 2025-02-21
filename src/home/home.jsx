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
                {createMessageArray()}
            </ul>
        </div>
        </main>

    );
}