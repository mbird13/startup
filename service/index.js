const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const DB = require('./database.js');
 const { createWebSocketServer } = require('./websocket.js');


const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;
const authCookieName = 'token';

//let users = [];
let favoriteRecipes = [];

app.use(express.json());

app.use(cookieParser());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

const verifyAuth = async (req, res, next) => {
    // check if the user is authenticated
    const user = await DB.getUserByToken(req.cookies[authCookieName]); //findUser('token', req.cookies[authCookieName]);
    if (user) {
        next();
    } else {
        res.status(401).send({ msg: 'Unauthorized' });
    }
};

apiRouter.post('/auth/create', async (req, res) => {
    if (await DB.getUser(req.body.email)) { //findUser('email', req.body.email)) {
      res.status(409).send({ msg: 'Existing user' });
    } else {
      const user = await createUser(req.body.email, req.body.password);
  
      setAuthCookie(res, user.token);
      res.send({ email: user.email });
    }
  });

apiRouter.post('/auth/login', async (req, res) => {
const user = await DB.getUser(req.body.email); //findUser('email', req.body.email);
if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
    user.token = uuid.v4();
    DB.updateUser(user);
    setAuthCookie(res, user.token);
    res.send({ email: user.email });
    return;
    }
}
res.status(401).send({ msg: 'Unauthorized' });
});

apiRouter.delete('/auth/logout', async (req, res) => {
    const user = await DB.getUserByToken(req.cookies[authCookieName]); //findUser('token', req.cookies[authCookieName]);
    if (user) {
        await DB.removeToken(user);
    }
    res.clearCookie(authCookieName);
    res.status(204).end();
}); 

apiRouter.get('/recipes', verifyAuth, async (req, res) => {
    const user = await DB.getUserByToken(req.cookies[authCookieName]); //findUser('token', req.cookies[authCookieName]);
    const favorites = await DB.getFavorites(user.email) || [];
    res.send(favorites);//favoriteRecipes[user.email] || []);
});

apiRouter.post('/recipe', verifyAuth, (req, res) => {
    //add a recipe to the user's favorites
    let newRecipe = { userId: req.body.userId, name: req.body.name, image: req.body.image, instructions: req.body.instructions };
    //currentFavorites = favoriteRecipes[req.body.userId] || [];
    DB.addFavorite(newRecipe);
    //currentFavorites.push(newRecipe);
    //favoriteRecipes[req.body.userId] = currentFavorites;
    res.send("Recipe added to favorites");

});

apiRouter.delete('/recipes', verifyAuth, async (req, res) => {
    //delete all recipes from the user's favorites
    const user = await DB.getUserByToken(req.cookies[authCookieName]); //findUser('token', req.cookies[authCookieName]);
    DB.clearFavorites(user.email);
    //delete favoriteRecipes[user.email];
    res.send("Favorites cleared");
});

// Default error handler
app.use(function (err, req, res, next) {
    res.status(500).send({ type: err.name, message: err.message });
  });

async function createUser(email, password) {
    const passwordHash = await bcrypt.hash(password, 10);
  
    const user = {
      email: email,
      password: passwordHash,
      token: uuid.v4(),
    };
    DB.addUser(user);
    //users.push(user);
  
    return user;
  }
  
  async function findUser(field, value) {
    if (!value) return null;
  
    return users.find((u) => u[field] === value);
  }
  
  // setAuthCookie in the HTTP response
  function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
      secure: true,
      httpOnly: true,
      sameSite: 'strict',
    });
  }
  


const httpService = app.listen(port);
createWebSocketServer(httpService);

