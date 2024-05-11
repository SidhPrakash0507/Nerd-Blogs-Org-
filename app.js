// app.js
const express = require('express');
const mysql = require('mysql');
const app = express();

// Create connection to MySQL database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database'          
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to MySQL database');
});

// Middleware to parse form data
app.use(express.urlencoded({ extended: false }));

// Route to handle form submission
app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.query(sql, [name, email], (err, result) => {
        if (err) {
            throw err;
        }
        console.log('Data inserted successfully');
        res.send('Data inserted successfully');
    });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
