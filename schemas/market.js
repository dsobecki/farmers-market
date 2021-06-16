const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const marketSchema = new Schema({
    name: String,
    location: String,
    description: String
});

const Market = mongoose.model('Market', marketSchema);

module.exports = Market;