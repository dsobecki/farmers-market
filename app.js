const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const logger = require('morgan');
var methodOverride = require('method-override')
const Market = require('./schemas/market');
const Event = require('./schemas/event');


mongoose.connect('mongodb://localhost:27017/farm_market', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Mongoose Connected");
});

// log requests
app.use(logger('dev'));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// Register ejs as html
app.engine('.html', require('ejs').__express);

// Express defaults to CWD/views (just explicitly setting it)
app.set('views', path.join(__dirname, 'views'));

// Path to public directory
app.use(express.static(path.join(__dirname, 'public')));

// res.render() no longer needs an extention
app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.send('Home');
});

//      Routes
// ************************

// All markets
app.get('/markets', (req, res) => {
    res.render('markets/show');
});
// Renders Market Edit Form
app.get('/markets/edit', (req, res) => {
    res.render('markets/edit');
});
// Adds Market
app.post('/markets/edit', (req, res) => {
    res.render('Market Added');
});
// Edits Market
app.put('/markets/edit', (req, res) => {
    res.render('Market Edited');
});
// Deletes Market
app.delete('/markets/edit', (req, res) => {
    res.render('Market Deleted');
});
// ************************

app.listen(8080, () => {
    console.log('Listening on port 8080');
});