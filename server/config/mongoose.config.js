const mongoose = require('mongoose');
// Connect MongoDB at default port 27017.
mongoose.connect('mongodb://localhost:27017/bromas', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});
