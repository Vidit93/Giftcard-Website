const express = require('express');
const path = require('path');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// MongoDB connection URI
const uri = 'mongodb://localhost:27017/mydatabase';
const client = new MongoClient(uri);

// Serve static files from the public directory
app.use(express.static('public'));
// Middleware to parse JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/Services', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/Services.html'));
});

app.get('/ContactUs', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/ContactUs.html'));
});

app.get('/AboutUs', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/AboutUs.html'));
});

app.get('/CardCategory.', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/cardcategory.html'));
});

// Route to handle form submissions
app.post('/submit-form', async (req, res) => {
    const formData = req.body;

    try {
        // Connect to MongoDB
        await client.connect();

        // Access the database
        const database = client.db('mydatabase');

        // Access the collection
        const collection = database.collection('formdata');

        // Insert data into the collection
        await collection.insertOne(formData);
        console.log('Data inserted successfully');

        // Send a success response
        res.status(200).send('Form submitted successfully!');
    } catch (error) {
        console.error('Error inserting data:', error);
        // Send an error response
        res.status(500).send('Internal Server Error');
    } finally {
        // Close the connection
        await client.close();
    }
});


// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});