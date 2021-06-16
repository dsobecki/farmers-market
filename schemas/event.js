const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
    date: Date,
    desciption: String
    // add a link to Market
});

const Event = new mongoose.model('Event', eventSchema);

module.exports = Event;

