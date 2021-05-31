const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    name: String,
    phone: Number,
    date: String,
    time: String,
});

module.exports = mongoose.model('appointment', AppointmentSchema);