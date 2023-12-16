const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Inquiry = require('./models/inquirymodel'); // Import the Inquiry model

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect('mongodb://localhost:27017/treadfintech')
.then(() => console.log("connected to mongoose"))
.catch(error => console.log("Could not connect to MongoDB...", error));

// Handle form submission
app.post('/submit', async (req, res) => {
    const { name, email, subject, message } = req.body;
    try {
        // Create a new Inquiry document
        const newInquiry = new Inquiry({
            name,
            email,
            subject,
            message,
        });

        // Save the new inquiry to the database
        const result = await newInquiry.save();
        console.log('Inquiry saved to the database:', result);
        res.send('Inquiry submitted successfully!');
      
    } catch (error) {
        console.error('Error saving inquiry to the database:', error);
        res.status(500).send('Internal Server Error');
    }
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
