import React from "react";
import { useNavigate } from 'react-router-dom';
import './favorites.css';

export function Favorites() {
    const navigate = useNavigate();
    const json = localStorage.getItem("favorites") || "[]";
    const favorites = JSON.parse(json);

    function createFavoritesList() {
        const favoritesArray = [];
        for (const [i, recipe] of favorites.entries()) {
          favoritesArray.push(
            <li key={i}>
                <h2>{recipe.name}</h2>
                <img alt={recipe.name} src={recipe.image} />
                <p>{recipe.instructions}</p>
            </li>
          );
        }
        return favoritesArray;
      }

      function clearFavorites() {
        localStorage.setItem("favorites", "[]");
        navigate("/favorites");
      }

    return (
        <main className="favorites_main">
            <ul>
                {createFavoritesList()}
            </ul>
            <h2>My Favorite Recipes</h2>
            <img alt="Plate of Drunken Noodles" src="drunkennoodles.jpg" />
            <h3>Drunken Noodles</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <img alt="Plate of Lasagna" src="lasagna.jpg" />
            <h3>Lasagna</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
            <button onClick={() => clearFavorites()}>Clear Favorites</button>
        </main>
    );
}
