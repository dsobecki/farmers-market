const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
    date: Date,
    desciption: String,
    market: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Market'
    }
});

const Event = new mongoose.model('Event', eventSchema);

module.exports = Event;

