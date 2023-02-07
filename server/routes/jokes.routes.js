const JokesController = require("../controllers/jokes.controllers");

module.exports = app => {
    app.get("/api/jokes/", JokesController.findAllJokes);
    app.get("/api/jokes/random/", JokesController.jokeRandom);
    app.get("/api/jokes/:id", JokesController.findOneJokes);
    app.post("/api/jokes/new", JokesController.createNewJokes);
    app.put("/api/jokes/update/:id", JokesController.updateExistingJokes);
    app.delete("/api/jokes/delete/:id", JokesController.deleteJoke);
};