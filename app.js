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

//      Routes
// ************************
// Home
// app.get('/', (req, res) => {
//     res.send('Home');
// });

// All markets
app.get('/markets', (req, res) => {
    res.render('markets/show');
});
//              <------------ Will need to have id association
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

// All events
app.get('/events', (req, res) => {
    res.render('events/show');
});
//              <------------ Will need to have id association
//  Render Event Edit Form
app.get('/events/edit', (req, res) => {
    res.render('events/edit');
})


// ************************

app.listen(8080, () => {
    console.log('Listening on port 8080');
});