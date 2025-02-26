import React from "react";
import { useSearchParams } from "react-router-dom";
import './results.css';
import { useNavigate } from 'react-router-dom';

export function Results() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const meal = searchParams.get("meal");
    const allergyList = searchParams.get("allergies");

    const [imgUrl, setImgUrl] = React.useState('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=');
    const [recipeName, setRecipeName] = React.useState('Finding the perfect recipe...');
    const [instructions, setInstructions] = React.useState('');


    React.useEffect(() => {
        //make API call
        if (meal === "Breakfast") {
            setImgUrl("https://www.themealdb.com/images/media/meals/1550441882.jpg");
            setRecipeName("Breakfast Potatoes");
            setInstructions("Before you do anything, freeze your bacon slices that way when you're ready to prep, it'll be so much easier to chop!\r\nWash the potatoes and cut medium dice into square pieces. To prevent any browning, place the already cut potatoes in a bowl filled with water.\r\nIn the meantime, heat 1-2 tablespoons of oil in a large skillet over medium-high heat. Tilt the skillet so the oil spreads evenly.\r\nOnce the oil is hot, drain the potatoes and add to the skillet. Season with salt, pepper, and Old Bay as needed.\r\nCook for 10 minutes, stirring the potatoes often, until brown. If needed, add a tablespoon more of oil.\r\nChop up the bacon and add to the potatoes. The bacon will start to render and the fat will begin to further cook the potatoes. Toss it up a bit! The bacon will take 5-6 minutes to crisp.\r\nOnce the bacon is cooked, reduce the heat to medium-low, add the minced garlic and toss. Season once more. Add dried or fresh parsley. Control heat as needed.\r\nLet the garlic cook until fragrant, about one minute.\r\nJust before serving, drizzle over the maple syrup and toss. Let that cook another minute, giving the potatoes a caramelized effect.\r\nServe in a warm bowl with a sunny side up egg!");
            
        } else if (meal === "Dinner") {
            setImgUrl("https://www.themealdb.com/images/media/meals/sxrpws1511555907.jpg");
            setRecipeName("Lamb and Potato pie");
            setInstructions("Dust the meat with flour to lightly coat.\r\nHeat enough vegetable oil in a large saucepan to fill the base, and fry the onion and meat until lightly browned. Season with salt and pepper.\r\nAdd the carrots, stock and more seasoning to taste.\r\nBring to the boil, cover and reduce the heat to a simmer. Simmer for at least an hour or until the meat is tender. Take your time cooking the meat, the longer you leave it to cook, the better the flavour will be.\r\nPreheat the oven to 180C/350F/Gas 4.\r\nAdd the drained potato cubes to the lamb.\r\nTurn the mixture into a pie dish or casserole and cover with the shortcrust pastry. Make three slits in the top of the pastry to release any steam while cooking.\r\nBrush with beaten egg and bake for about 40 minutes, until the pastry is golden brown.\r\nServe.");

        } else if (meal === "Dessert") {
            setImgUrl("https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg");
            setRecipeName("Apple & Blackberry Crumble");
            setInstructions("Heat oven to 190C/170C fan/gas 5. Tip the flour and sugar into a large bowl. Add the butter, then rub into the flour using your fingertips to make a light breadcrumb texture. Do not overwork it or the crumble will become heavy. Sprinkle the mixture evenly over a baking sheet and bake for 15 mins or until lightly coloured.\r\nMeanwhile, for the compote, peel, core and cut the apples into 2cm dice. Put the butter and sugar in a medium saucepan and melt together over a medium heat. Cook for 3 mins until the mixture turns to a light caramel. Stir in the apples and cook for 3 mins. Add the blackberries and cinnamon, and cook for 3 mins more. Cover, remove from the heat, then leave for 2-3 mins to continue cooking in the warmth of the pan.\r\nTo serve, spoon the warm fruit into an ovenproof gratin dish, top with the crumble mix, then reheat in the oven for 5-10 mins. Serve with vanilla ice cream.");
        } else {
            setImgUrl("https://www.themealdb.com/images/media/meals/rvxxuy1468312893.jpg");
            setRecipeName("Vegan Lasagna");
            setInstructions("1) Preheat oven to 180 degrees celcius. \r\n2) Boil vegetables for 5-7 minutes, until soft. Add lentils and bring to a gentle simmer, adding a stock cube if desired. Continue cooking and stirring until the lentils are soft, which should take about 20 minutes. \r\n3) Blanch spinach leaves for a few minutes in a pan, before removing and setting aside. \r\n4) Top up the pan with water and cook the lasagne sheets. When cooked, drain and set aside.\r\n5) To make the sauce, melt the butter and add the flour, then gradually add the soya milk along with the mustard and the vinegar. Cook and stir until smooth and then assemble the lasagne as desired in a baking dish. \r\n6) Bake in the preheated oven for about 25 minutes.",);
        }
    }, []);

    function addToFavorites() {
        const json = localStorage.getItem("favorites") || "[]";
        const currentFavorites = JSON.parse(json);
        const recipe = { name: recipeName, image: imgUrl, instructions: instructions };
        localStorage.setItem("favorites", JSON.stringify([...currentFavorites, recipe]));
        navigate("/favorites");
    }
    
    return (
        <main className="results_main">
            <h2>Want to eat this?</h2>
            <img alt={recipeName} src={imgUrl} />
            <h3>{recipeName}</h3>
            <p>{instructions}</p>
            <form>
                <button onClick={() => addToFavorites()}>Add to favorites</button>
            </form>
        </main>
    );
}