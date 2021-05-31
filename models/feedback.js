const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
    name: String,
    company: String,
    designation: String,
    feedback: String,
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
