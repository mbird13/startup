const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const recipeCollection = db.collection('favorites');

(async function testConnection() {
    try {
      await db.command({ ping: 1 });
      console.log(`Connect to database`);
    } catch (ex) {
      console.log(`Unable to connect to database with ${url} because ${ex.message}`);
      process.exit(1);
    }
  })();

  function getUser(email) {
    return userCollection.findOne({ email: email });
  }
  
  function getUserByToken(token) {
    return userCollection.findOne({ token: token });
  }
  
  async function addUser(user) {
    await userCollection.insertOne(user);
  }
  
  async function updateUser(user) {
    await userCollection.updateOne({ email: user.email }, { $set: user });
  }

  async function removeToken(user) {
    await userCollection.updateOne(
        { email: user.email },
        { $unset: { token: "" } }
    );
}
  
  async function addFavorite(recipe) {
    return recipeCollection.insertOne(recipe);
  }
  
  function getFavorites(userId) {
    const query = { userId: userId };
    const cursor = recipeCollection.find(query);
    return cursor.toArray();
  }

   async function clearFavorites(userId) {
    const result = await recipeCollection.deleteMany({ userId: userId });
    return result;
   }
  
  module.exports = {
    getUser,
    getUserByToken,
    addUser,
    updateUser,
    addFavorite,
    getFavorites,
    clearFavorites,
    removeToken
  };
  