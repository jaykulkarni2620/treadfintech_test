const mongoose = require('mongoose');

// Define the schema for the inquiry
const inquirySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
});

// Create the model for the inquiry
const Inquiry = mongoose.model('Inquiry', inquirySchema);

module.exports = Inquiry;
