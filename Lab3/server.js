// Load express as a dependancy
const express = require('express');

// Define the express app
const app = express();

// Define the server host Ip and port
const HOST = '127.0.0.1';
// if port use value other wise is 3000
const PORT = process.env.PORT || 3000;

// Server static address from public folder
app.use(express.static('./public'));

// Start the server and listen to requests
app.listen(PORT,HOST, () => {
    console.log(`Server connected at http://${HOST}:${PORT}`)
});
