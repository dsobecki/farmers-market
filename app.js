const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Market = require('./schemas/market');


mongoose.connect('mongodb://localhost:27017/farm_market', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Mongoose Connected");
});
// ends func

app.get('/', (req, res) => {
    res.send('hello');
})

// All markets
app.get('/markets', (req, res) => {
    res.send('All Markets');
})

// Add market
app.post('/markets', (req, res) => {
    res.send('Add Market')
})

app.listen(8080, () => {
    console.log('Server Up');
})