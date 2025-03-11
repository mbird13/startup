import React from "react";
import { useNavigate } from 'react-router-dom';
import './favorites.css';

export function Favorites({userName}) {
    const navigate = useNavigate();
    
    //const json = localStorage.getItem("favorites") || "[]";

    //let favorites = JSON.parse(json); //useState();
    const [favorites, setFavorites] = React.useState([]);

    function createFavoritesList() {
        const favoritesArray = [];
        for (const [i, recipe] of favorites.entries()) {
          favoritesArray.push(
            <li key={i}>
                <h3>{recipe.name}</h3>
                <img alt={recipe.name} src={recipe.image} />
                <p>{recipe.instructions}</p>
            </li>
          );
        }
        if (favoritesArray && favoritesArray.length === 0) {
            favoritesArray.push(
                <div>
                <h3>Nothing here! Search for a recipe to add!</h3>
                <button onClick={()=>navigate("/home")}>Go to search</button>
                </div>
            );
        }
        return favoritesArray;
      }

      function clearFavorites() {
        //localStorage.setItem("favorites", "[]");
        fetch("/api/recipes", {
          method: "delete"
        }).then(response => {
          if (response.status === 200) {
            setFavorites([]);
          }
          else {
            alert("Failed to clear favorites. Try again later.");
          }
        });
        //navigate("/favorites");
      }

      // React.useEffect(() => {
      // }, [favorites]);

      React.useEffect(() => {
        fetch("/api/recipes", { //localStorage.getItem("favorites") || "[]";
          method: "get",
          headers: { "Content-Type": "application/json" }
        }).then(response => response.json())
        .then(newfavorites => {
          setFavorites(newfavorites);
        });
      }, []);

    return (
        <main className="favorites_main">
            <h2>My Favorite Recipes</h2>
            <ul>
                {createFavoritesList()}
            </ul>
            <button onClick={() => clearFavorites()}>Clear Favorites</button>
        </main>
    );
}
