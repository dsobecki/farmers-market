const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Market = require('./schemas/market');


mongoose.connect('mongodb://localhost:27017/farm_market', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
});

app.get('/', (req, res) => {
    const detroit = new Market({ name: 'Eastern Market', location: '111 Main St', description: 'The Best in town' });
    detroit.save(function (err, detroit) {
        if (err) return console.log(err);
    })
    res.send('Saved detroit');
})


app.listen(8080, () => {
    console.log('Server Up');
})