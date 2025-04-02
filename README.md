# Find My Meal

[My Notes](notes.md)

## 🚀 Specification Deliverable

> [!NOTE]
>  Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Have you ever been stuck trying to decide what to make for dinner? Maybe you don't have much time and just want to be given a recipe that fits your schedule. This site is the perfect answer. Just select how much time you have and what kind of meal you want to make and wait for the perfect recipe to be selected for you. As you use the site, you can even keep track of your favorite meals that you've tried for easy access at any time. There's no need to stress over your meal choices ever again. 

### Design

![Design image](RecipeWebsite.png)

### Key features

- Registration and authentication of users
- Automatic recipe search and selection
- Ability to filter search by type of meal and prep time 
- Ability to select a recipe to use
- Notifications of selections from other users
- Persistent storage of favorite recipes

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Uses HTML to structure the application. Uses three HTML pages. One for selecting preferences. One to display search results. One to show favorite recipes. 
- **CSS** - Responsive styling to look good on any size screen. Good color choices and whitespace.
- **React** - Provides login, selection of preferences, display of notifications.
- **Service** - Backend sevice with endpoints for:
    - login/logout
    - retrieving list of favorite recipes
    - adding new favorites
    - external call to get recipes based on preferences   
- **DB/Login** - Store favorites, and recipes in database. Register and login users. Store user credentials securely.
- **WebSocket** - As users add recipes to favorites and use recipes, notifications are broadcast to all users. 

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://startup.findmymeal.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - Four html pages. index.html (Login page), home.html, and favorites.html, results.html.
- [x] **Proper HTML element usage** - I used title, header, nav, menu, main, form, input, button, a, img, ul, footer and more. 
- [x] **Links** - Navigation bar with links between each html page. Additional link to github.
- [x] **Text** - Favorites page contains text.
- [x] **3rd party API placeholder** - Results page has placeholder image and text for external API results (only accessible by clicking search on home page).
- [x] **Images** - Images on favorites and results page.
- [x] **Login placeholder** - Placeholder for auth on Login page.
- [x] **DB data placeholder** - Favorite recipes on favorites.html.
- [x] **WebSocket placeholder** - Home page has placeholder text for notifications from other users.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Header, footer, and main content body** - I changed background color and styled the borders.
- [x] **Navigation elements** - I removed the styling of the list elements and added a change of color when hovered over.
- [x] **Responsive to window resizing** - I changed font sizes and page layout to adjust for different window sizes.
- [x] **Application elements** - Edited the format and style of forms and buttons to look better. 
- [x] **Application text content** - Imported fonts to achieve a uniform look across the various pages. Changed the color of some text elements. 
- [x] **Application images** - Adjusted image sizes to account for different window sizes. Rounded the edges of the images. 

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Bundled using Vite** 
- [x] **Components** - I brough the code over from html files. Changed html class to React className I also had to change some css to work with the way styles overlap in react.
- [x] **Router** - Routing between login, home, favorites, and results components. Results is still only accessible by hitting search on the home page. 

## 🚀 React part 2: Reactivity

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **All functionality implemented or mocked out** - setInterval used to simulate websocket notifications on home page. Local Storage used to store username on login and to store a list of favorite recipes. 
- [x] **Hooks** - useEffect and useState used on home, results, and favorites pages.
## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Node.js/Express HTTP service** - I created an index.js file to run an express app for the backend.
- [x] **Static middleware for frontend** - I added static middleware to pull from the public directory.
- [x] **Calls to third party endpoints** - I call themealdb.com/api.php to get recipes for the results page.
- [x] **Backend service endpoints** - Endpoints for login/logout and for adding, getting, and deleting favorite recipes.
- [x] **Frontend calls service endpoints** - The frontend service calls endpoints for login/logout and for adding, getting, and deleting favorite recipes.  These recipes are only visible to the user that favorited them. 

## 🚀 DB/Login deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **User registration** - User information is stored in the databased when they register. 
- [x] **User login and logout** - User login and logout updates information in the database. 
- [x] **Stores data in MongoDB** - Usernames, hashed passwords, auth tokens, and favorite recipes are stored in the database. 
- [x] **Stores credentials in MongoDB** - Usernames, hashed passwords, auth tokens are stored in the database. 
- [x] **Restricts functionality based on authentication** - Recipes cannot be added to favorites or retrieved from favorites list without authentication. 

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Backend listens for WebSocket connection** - Added websocket.js to handle websocket connections in the backend.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
