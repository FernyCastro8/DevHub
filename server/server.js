const express = require('express');
const db = require('./config/connection');
const PORT = process.env.PORT || 3001;


// Middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Database connection
db.once('open', (err) => {
    if (err) throw err;
    app.listen(PORT, () => console.log('Server listening on port %s,', PORT));
})



