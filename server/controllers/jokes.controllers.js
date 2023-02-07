const Jokes = require("../model/jokes.model");

module.exports.findAllJokes = async (req, res) => {
    const alljokes = await Jokes.find();
    res.json({ result: "ok", alljokes })
}
module.exports.findOneJokes = async (req, res) => {
    const oneJokes = await Jokes.findOne({ _id: req.params.id })
    res.json({ result: "ok", theJoker: oneJokes })
}
module.exports.jokeRandom = async (req, res) => {
    const count = await Jokes.find().count();
    let r = await Math.floor(Math.random() * count);
    const randomJoke = await Jokes.findOne().skip(r);
    res.json({ result: "ok", random: randomJoke })
}

module.exports.createNewJokes = async (req, res) => {
    const newJokes = await Jokes.create(req.body);
    res.json({ result: "ok", newJokes })
}
module.exports.updateExistingJokes = async (req, res) => {
    const jokeUpdate = await Jokes.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    res.json({ result: "ok", updateJoke: jokeUpdate })
}
module.exports.deleteJoke = async (req, res) => {
    const jokeDelete = await Jokes.deleteOne({ _id: req.params.id })
    res.json({ result: "ok", delele: jokeDelete })
}


