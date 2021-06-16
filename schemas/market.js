const mongoose = require('mongoose');
const { Schema } = mongoose;

const marketSchema = new Schema({
    name: String,
    location: String,
    description: String
});

const Market = mongoose.model('Market', marketSchema);

module.exports = Market;