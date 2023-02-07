const { mongoose } = require("mongoose");

// Declare the Schema of the Mongo model
const jokesSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is require"],
        minlength: [10, "Is required min 10 chracters the long"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is require"],
        minlength: [3, "Is required min 10 chracters the long"]
    },
}, { versionKey: false });

//Export the model
const Jokes = mongoose.model('Jokers', jokesSchema);

module.exports = Jokes;