// Import the express module
// Create an Express application
// Set up the server to listen on port 3000
// Log a message when the server starts

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send("Hello, World!");
});


app.listen(port, ()=>{
console.log(`Server is running on port ${port}`);
});

// Write your code here

