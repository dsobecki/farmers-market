const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Market = require('./schemas/market');
const Event = require('./schemas/event');


mongoose.connect('mongodb://localhost:27017/farm_market', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Mongoose Connected");
});

// Register ejs as html
app.engine('.html', require('ejs').__express);

// Express defaults to CWD/views (just explicitly setting it)
app.set('views', path.join(__dirname, 'views'));

// Path to public directory
app.use(express.static(path.join(__dirname, 'public')));

// res.render() no longer needs an extention
app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.send('hello');
});

const testMarket = "Hello ";
const testEvent = "World";

// All markets
app.get('/markets', (req, res) => {
    res.render('markets/show', { testMarket, testEvent });
});

// Add market
app.post('/markets', (req, res) => {
    res.send('Add Market')
});

app.listen(8080, () => {
    console.log('Server Up');
});