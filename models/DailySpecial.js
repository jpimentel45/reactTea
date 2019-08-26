const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema

const DailySpecialSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Special = mongoose.model('special', DailySpecialSchema)