import express from 'express';

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app = express();

app.use(express.static('public'));

const verifyAuth = (req, res, next) => {
    // check if the user is authenticated
    next();
}

app.post('/api/recipe', verifyAuth, (req, res) => {
    //add a recipe to the user's favorites
    res.sent("Recipe added to favorites");

});


app.listen(port);
