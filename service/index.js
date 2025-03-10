import express from 'express';
import bcrypt from 'bcrypt';
import uuid from 'uuid';
import cookieParser from 'cookie-parser';

const port = process.argv.length > 2 ? process.argv[2] : 4000;
const authCookieName = 'token';

let users = [];
let favoriteRecipes = [];

app = express();

app.use(express.json());

app.use(cookieParser());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

const verifyAuth = async (req, res, next) => {
    // check if the user is authenticated
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
        next();
    } else {
        res.status(401).send({ msg: 'Unauthorized' });
    }
};

apiRouter.post('/auth/create', async (req, res) => {
    if (await findUser('email', req.body.email)) {
      res.status(409).send({ msg: 'Existing user' });
    } else {
      const user = await createUser(req.body.email, req.body.password);
  
      setAuthCookie(res, user.token);
      res.send({ email: user.email });
    }
  });

apiRouter.post('/auth/login', async (req, res) => {
const user = await findUser('email', req.body.email);
if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
    user.token = uuid.v4();
    setAuthCookie(res, user.token);
    res.send({ email: user.email });
    return;
    }
}
res.status(401).send({ msg: 'Unauthorized' });
});

apiRouter.delete('/auth/logout', async (req, res) => {
const user = await findUser('token', req.cookies[authCookieName]);
if (user) {
    delete user.token;
}
res.clearCookie(authCookieName);
res.status(204).end();
}); 

apiRouter.get('/recipes', verifyAuth, (_req, res) => {

    res.send(favoriteRecipes[req.body.userId] || []);
});

apiRouter.post('/recipe', verifyAuth, (req, res) => {
    //add a recipe to the user's favorites
    let newRecipe = { name: req.body.name, image: req.body.image, instructions: req.body.instructions };
    currentFavorites = favoriteRecipes[req.body.userId] || [];
    currentFavorites.push(newRecipe);
    favoriteRecipes[req.body.userId] = currentFavorites;
    res.send("Recipe added to favorites");

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
    users.push(user);
  
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
  


app.listen(port);
