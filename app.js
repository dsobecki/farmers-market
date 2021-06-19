const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const logger = require('morgan');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const Market = require('./schemas/market');
const Event = require('./schemas/event');

mongoose.connect('mongodb://localhost:27017/farm_market', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Mongoose Connected");
});

app.engine('ejs', ejsMate);

//                              <------------ TODO ()
// Register ejs as html (ejsMate dose not like this)
// app.engine('.html', require('ejs').__express);

// Express defaults to CWD/views (just explicitly setting it)
app.set('views', path.join(__dirname, 'views'));
// res.render() no longer needs an extention
app.set('view engine', 'ejs');

// log requests
app.use(logger('dev'));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
// Path to public directory
app.use(express.static(path.join(__dirname, 'public')));

//          <--------- Find Docs
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//      Routes
// ************************
// Home
// All markets (for now)
app.get('/', (req, res) => {
});

// Show one market
app.get('/markets', (req, res) => {
    res.render('markets/show');
});

// Renders Market Add Form
app.get('/markets/add', (req, res) => {
    res.render('markets/add');
});

// Adds Market
app.post('/markets/add', async (req, res) => {
    const market = new Market(req.body);
    market.save();
    res.redirect('/markets');
});

// Edits Market
app.put('/markets/edit', (req, res) => {
    res.render('Market Edited');
});

// Deletes Market
app.delete('/markets/:_id/edit', (req, res) => {
    res.render('Market Deleted');
});

// All events for a market
app.get('/markets/:_id/events', (req, res) => {
    res.render('events/show');
});

//  Render Event Edit Form
app.get('/markets/:_id/events/edit', (req, res) => {
    res.render('events/edit');
})


// ************************

app.listen(8080, () => {
    console.log('Listening on port 8080');
});