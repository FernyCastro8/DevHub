const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/DevHub', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err));

module.exports = mongoose.connection;