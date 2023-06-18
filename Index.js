const express = require("express");
const mysql2 = require('mysql2');
const seatRouter = require("./Routes/seatRoutes");

const port = 8081;

const server = express();

const connection = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Root',
  database: 'bookings'
});

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL:', error);
    return;
  }
  console.log('Connected to MySQL!');
});

server.use(express.json()); // Add this line to parse JSON data
server.use(express.urlencoded({ extended: true })); // Add this line to parse URL-encoded data

server.use("/", seatRouter);

// Error handling middleware
server.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
